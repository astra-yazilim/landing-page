import type { Locale } from "@/config/i18n";
import { productCatalog } from "@/config/products";
import { projectCatalog } from "@/config/projects";
import { getContent } from "@/content";
import type { ProductText, ProjectText } from "@/content/types";

export type Product = (typeof productCatalog)[number] & ProductText;
export type Project = (typeof projectCatalog)[number] & ProjectText;

export const getProducts = (locale: Locale): Product[] =>
  productCatalog.map((entry) => ({ ...entry, ...getContent(locale).products[entry.id] }));

export const getProjects = (locale: Locale): Project[] =>
  projectCatalog.map((entry) => ({ ...entry, ...getContent(locale).projects[entry.id] }));

export const getReferences = (locale: Locale) => getProjects(locale).filter((project) => !project.own);

export const getOwnProjects = (locale: Locale) => getProjects(locale).filter((project) => project.own);
