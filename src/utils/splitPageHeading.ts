/** Split SEO h1 strings formatted as "Primary: accent" onto two lines. */
export function splitPageHeading(full: string): { primary: string; secondary: string | null } {
  const title = full.trim();
  const colon = title.indexOf(':');
  if (colon === -1) {
    return { primary: title, secondary: null };
  }
  const primary = title.slice(0, colon).trim();
  const secondary = title.slice(colon + 1).trim();
  if (!primary || !secondary) {
    return { primary: title, secondary: null };
  }
  return { primary, secondary };
}