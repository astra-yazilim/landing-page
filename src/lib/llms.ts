import { defaultLocale, locales, type Locale } from "@/config/i18n";
import { pricingModelIds } from "@/config/pricing";
import { getPath, getServicePath, type RouteId } from "@/config/routes";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { getProducts } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/seo";
import { getServices } from "@/lib/services";

const link = (label: string, path: string, note?: string) =>
  `- [${label}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

const section = (title: string, lines: string[]) => [`## ${title}`, "", ...lines, ""];

const getPageMeta = (locale: Locale, routeId: RouteId) => {
  const { pages, site } = getContent(locale);
  if (routeId === "home") return { title: site.title, description: site.description };
  const page = pages[routeId as keyof typeof pages];
  return "meta" in page ? page.meta : { title: getContent(locale).layout.nav[routeId], description: "" };
};

const pageLinks = (locale: Locale, routeIds: RouteId[]) =>
  routeIds.map((routeId) => {
    const meta = getPageMeta(locale, routeId);
    return link(meta.title, getPath(locale, routeId), meta.description);
  });

const serviceLinks = (locale: Locale) =>
  getServices(locale).map((service) =>
    link(service.title, getServicePath(locale, service.slug), service.summary),
  );

const productLinks = (locale: Locale) =>
  getProducts(locale).map((product) =>
    link(product.name, `${getPath(locale, "products")}#${product.id}`, product.tagline),
  );

export function buildLlmsIndex(): string {
  const locale = defaultLocale;
  const { site } = getContent(locale);
  const { llms } = site;
  const otherLocales = locales.filter((item) => item !== locale);

  return [
    `# ${siteConfig.name}`,
    "",
    `> ${site.description}`,
    "",
    ...llms.facts.map((fact) => `- ${fact}`),
    `- ${llms.contactLabel}: ${siteConfig.contact.email}`,
    "",
    ...section(llms.guidanceTitle, llms.guidance.map((item) => `- ${item}`)),
    ...section(llms.pagesTitle, pageLinks(locale, ["home", ...seoConfig.llms.primaryRoutes])),
    ...section(llms.servicesTitle, serviceLinks(locale)),
    ...section(llms.productsTitle, productLinks(locale)),
    ...otherLocales.flatMap((otherLocale) =>
      section(getContent(locale).site.llms.otherLanguageTitle, [
        ...pageLinks(otherLocale, ["home", ...seoConfig.llms.primaryRoutes]),
        ...serviceLinks(otherLocale),
      ]),
    ),
    ...section(llms.optionalTitle, [
      link(llms.fullTitle, "/llms-full.txt"),
      ...pageLinks(locale, seoConfig.llms.optionalRoutes),
    ]),
  ]
    .join("\n")
    .trimEnd()
    .concat("\n");
}

function buildFullForLocale(locale: Locale): string[] {
  const { site, pricing, faq } = getContent(locale);
  const { llms } = site;

  return [
    `# ${siteConfig.name} (${locale})`,
    "",
    `> ${site.description}`,
    "",
    ...llms.facts.map((fact) => `- ${fact}`),
    "",
    ...section(llms.guidanceTitle, llms.guidance.map((item) => `- ${item}`)),
    `## ${llms.servicesTitle}`,
    "",
    ...getServices(locale).flatMap((service) => [
      `### ${service.title}`,
      "",
      absoluteUrl(getServicePath(locale, service.slug)),
      "",
      service.description,
      "",
      `${llms.featuresLabel}:`,
      ...service.features.map((feature) => `- ${feature.title}: ${feature.text}`),
      ...service.deliverables.map((item) => `- ${item}`),
      "",
      ...service.faqs.flatMap((item) => [`**${item.question}**`, item.answer, ""]),
    ]),
    `## ${llms.productsTitle}`,
    "",
    ...getProducts(locale).flatMap((product) => [
      `### ${product.name}`,
      "",
      `${absoluteUrl(getPath(locale, "products"))}#${product.id}`,
      "",
      product.description,
      "",
      ...product.features.map((feature) => `- ${feature}`),
      "",
    ]),
    ...section(
      llms.pricingTitle,
      pricingModelIds.map((modelId) => `- ${pricing.models[modelId].label}: ${pricing.models[modelId].description}`),
    ),
    `## ${llms.faqTitle}`,
    "",
    ...faq.general.flatMap((item) => [`**${item.question}**`, item.answer, ""]),
  ];
}

export function buildLlmsFull(): string {
  return locales
    .flatMap((locale, index) => [...(index > 0 ? ["---", ""] : []), ...buildFullForLocale(locale)])
    .join("\n")
    .trimEnd()
    .concat("\n");
}

export const llmsHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};
