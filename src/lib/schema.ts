import { locales, type Locale } from "@/config/i18n";
import { getPath, getServicePath, type PageRouteId } from "@/config/routes";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import type { FaqItem } from "@/content/types";
import { absoluteUrl } from "@/lib/seo";
import type { Product, Project } from "@/lib/catalog";
import { getServices, type Service } from "@/lib/services";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const areaServed = (locale: Locale) => {
  const [city, country] = getContent(locale).site.seo.areaServed;
  return [
    { "@type": "City", name: city },
    { "@type": "Country", name: country },
  ];
};

export const organizationSchema = (locale: Locale) => {
  const { site } = getContent(locale);
  const services = getServices(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(seoConfig.ogImages[locale]),
    description: site.description,
    slogan: site.tagline,
    email: siteConfig.contact.email,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.city,
      addressCountry: seoConfig.location.countryCode,
    },
    areaServed: areaServed(locale),
    openingHoursSpecification: seoConfig.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
      ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
      areaServed: seoConfig.location.countryCode,
      availableLanguage: [...locales],
    },
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: getContent(locale).layout.nav.services,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(getServicePath(locale, service.slug)),
        },
      })),
    },
    ...(siteConfig.social.length ? { sameAs: siteConfig.social.map((item) => item.href) } : {}),
  };
};

export const websiteSchema = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl(getPath(locale, "home")),
  name: siteConfig.name,
  description: getContent(locale).site.description,
  inLanguage: locale,
  publisher: { "@id": organizationId },
});

export const serviceSchema = (locale: Locale, service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.summary,
  serviceType: service.shortTitle,
  url: absoluteUrl(getServicePath(locale, service.slug)),
  inLanguage: locale,
  provider: { "@id": organizationId },
  areaServed: areaServed(locale),
});

export const productListSchema = (locale: Locale, items: Product[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${absoluteUrl(getPath(locale, "products"))}#${product.id}`,
      inLanguage: locale,
      featureList: product.features,
      provider: { "@id": organizationId },
    },
  })),
});

export const projectListSchema = (locale: Locale, items: Project[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      genre: project.category,
      inLanguage: locale,
      creator: { "@id": organizationId },
      ...(project.url ? { url: project.url } : {}),
      ...(project.image ? { image: absoluteUrl(project.image) } : {}),
    },
  })),
});

export const pageSchema = (
  locale: Locale,
  type: "AboutPage" | "ContactPage" | "WebPage",
  routeId: PageRouteId,
  meta: { title: string; description: string },
) => ({
  "@context": "https://schema.org",
  "@type": type,
  name: meta.title,
  description: meta.description,
  url: absoluteUrl(getPath(locale, routeId)),
  inLanguage: locale,
  isPartOf: { "@id": websiteId },
  about: { "@id": organizationId },
});

export const serviceListSchema = (locale: Locale, items: Service[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: absoluteUrl(getServicePath(locale, service.slug)),
  })),
});

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export type Crumb = { label: string; href: string };

export const breadcrumbSchema = (locale: Locale, crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ label: getContent(locale).layout.nav.home, href: getPath(locale, "home") }, ...crumbs].map(
    (crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    }),
  ),
});
