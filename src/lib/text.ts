export const cx = (...values: (string | false | null | undefined)[]) => values.filter(Boolean).join(" ");

export const normalizeText = (value: string) =>
  value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function normalizeWebsiteUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    const isHttp = url.protocol === "http:" || url.protocol === "https:";
    const hasDomain = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(url.hostname);
    const isIpAddress = /^\d+(\.\d+){3}$/.test(url.hostname);
    if (!isHttp || !hasDomain || isIpAddress || url.username || url.password) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
