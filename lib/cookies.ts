export function getFavoritesCookie(cookie: string | null): string[] {
  if (!cookie) return [];
  const match = /favorites=([^;]+)/.exec(cookie);
  if (!match) return [];
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return [];
  }
}

export function setFavoritesCookie(headers: Headers, favs: string[]) {
  headers.append(
    "Set-Cookie",
    `favorites=${encodeURIComponent(JSON.stringify(favs))}; Path=/`,
  );
}
