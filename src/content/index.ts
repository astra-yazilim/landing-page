import type { Locale } from "@/config/i18n";
import { en } from "./en";
import { tr } from "./tr";
import type { Content } from "./types";

const dictionaries: Record<Locale, Content> = { tr, en };

export const getContent = (locale: Locale): Content => dictionaries[locale];
