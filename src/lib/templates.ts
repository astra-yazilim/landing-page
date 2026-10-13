import templateData from "@/data/templates.json";
import type { TemplateFeature } from "@/content/types";

export type Template = {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  features: TemplateFeature[];
  keywords: string;
  popularity: number;
  image: string;
  previewUrl: string;
};

export type TemplateCategory = { slug: string; name: string };

export const templateSource = templateData.source;
export const templateCategories: TemplateCategory[] = templateData.categories;
export const templates = templateData.items as Template[];
export const templateFeatures: TemplateFeature[] = ["shop", "blog", "portfolio", "onePage"];
export const templatePageSize = 12;
