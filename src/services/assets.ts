

export function get_asset(path: string): string {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
}