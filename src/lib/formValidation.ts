export const phonePattern = /^0?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$|^0?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const fullNameMinLength = 3;

export const normalizeName = (value: string) => value.trim().replace(/\s+/g, " ").toLocaleLowerCase("tr-TR");

export const isSignatureMatch = (signature: string, fullName: string) =>
  normalizeName(signature) === normalizeName(fullName);
