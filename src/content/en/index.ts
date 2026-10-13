import type { Content } from "@/content/types";
import { chatbot } from "./chatbot";
import { home } from "./home";
import { pages } from "./pages";
import { faq, pricing } from "./pricing";
import { products, projects } from "./products";
import { services } from "./services";
import { forms, layout, site } from "./site";

export const en: Content = {
  site,
  layout,
  forms,
  home,
  services,
  products,
  projects,
  pricing,
  faq,
  chatbot,
  pages,
};
