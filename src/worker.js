const HSTS = 'max-age=31536000; includeSubDomains; preload';

function redirectHttpsApex(url) {
  const target = new URL(url.toString());
  target.protocol = 'https:';
  target.hostname = 'cheatsarcraiders.com';
  return Response.redirect(target.toString(), 301);
}

/** Prefer trailing-slash paths to match Astro static output. */
function trailingSlashRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/' || url.pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(url.pathname)) {
    return request;
  }
  const next = new URL(request.url);
  next.pathname = `${url.pathname}/`;
  return new Request(next.toString(), request);
}

function withHsts(response) {
  const headers = new Headers(response.headers);
  headers.set('Strict-Transport-Security', HSTS);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/** Minimal edge wrapper: HTTPS/www redirects, then static assets from dist/. */
export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (
        url.protocol === 'http:' &&
        (url.hostname === 'cheatsarcraiders.com' || url.hostname === 'www.cheatsarcraiders.com')
      ) {
        return redirectHttpsApex(url);
      }

      if (url.hostname === 'www.cheatsarcraiders.com') {
        return redirectHttpsApex(url);
      }

      const assets = env.ASSETS;
      if (!assets?.fetch) {
        return new Response('Deploy incomplete: static assets missing. Re-run the Cloudflare build.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      }

      let response = await assets.fetch(request);
      if (response.status === 404) {
        response = await assets.fetch(trailingSlashRequest(request));
      }

      return withHsts(response);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Worker error';
      console.error('worker fetch failed:', message);
      if (env.ASSETS?.fetch) {
        try {
          const fallback = await env.ASSETS.fetch(request);
          return withHsts(fallback);
        } catch {
          /* fall through */
        }
      }
      return new Response('Site temporarily unavailable. Retry shortly or check the deploy log.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
  },
};