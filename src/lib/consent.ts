export type ConsentChoice = "granted" | "denied";

export const consentStorageKey = "cookie-consent";

export const openConsentEvent = "cookie-consent:open";

export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(consentStorageKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(consentStorageKey, choice);
  } catch {}
}

export function clearAnalyticsCookies() {
  const domains = ["", location.hostname, `.${location.hostname.replace(/^www\./, "")}`];
  document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) =>
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      }),
    );
}
