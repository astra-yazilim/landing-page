import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { Faq } from "@/components/sections/Faq/Faq";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import { isLocale, locales } from "@/config/i18n";
import { getPath, getServicePath } from "@/config/routes";
import { getContent } from "@/content";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug, getServices, getServiceSlugs } from "@/lib/services";
import { cx } from "@/lib/text";
import styles from "./page.module.css";

type ServicePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const generateStaticParams = () =>
  locales.flatMap((locale) => getServices(locale).map((service) => ({ locale, slug: service.slug })));

async function resolveService(params: ServicePageProps["params"]) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();
  return { locale, service };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, service } = await resolveService(params);
  const { site } = getContent(locale);

  return buildMetadata({
    locale,
    routeId: "services",
    serviceSlugs: getServiceSlugs(service.id),
    title: site.seo.serviceTitle(service.shortTitle),
    description: `${service.summary} ${site.seo.locationNote}`,
    keywords: [...service.tags, service.shortTitle, ...site.keywords],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, service } = await resolveService(params);
  const { pages } = getContent(locale);
  const detail = pages.serviceDetail;
  const otherServices = getServices(locale)
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={[serviceSchema(locale, service), faqSchema(service.faqs)]} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[
            { label: pages.services.meta.title, href: getPath(locale, "services") },
            { label: service.shortTitle, href: getServicePath(locale, service.slug) },
          ]}
          eyebrow={service.shortTitle}
          title={service.title}
          description={service.description}
        >
          <ul className={styles.tags}>
            {service.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <LeadButton
              size="lg"
              icon="arrowUpRight"
              defaults={{ source: `service-${service.id}`, service: service.shortTitle }}
            >
              {detail.primaryCta}
            </LeadButton>
            <Button href={getPath(locale, "pricing")} variant="glass" size="lg">
              {detail.secondaryCta}
            </Button>
          </div>
        </PageHero>

        <div className={styles.layout}>
          <section aria-labelledby="features-title">
            <h2 id="features-title" className={styles.sectionTitle}>
              {detail.featuresTitle}
            </h2>
            <ul className={styles.features}>
              {service.features.map((feature, index) => (
                <li key={feature.title}>
                  <Reveal delay={index * 0.06} className={styles.feature}>
                    <span className={styles.featureIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureText}>{feature.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          <aside className={styles.aside} aria-labelledby="deliverables-title">
            <SpotlightCard accent={service.accent} className={cx(styles.deliverables, styles[service.accent])}>
              <Icon name={service.icon} size={26} className={styles.deliverablesIcon} />
              <h2 id="deliverables-title" className={styles.deliverablesTitle}>
                {detail.deliverablesTitle}
              </h2>
              <ul className={styles.deliverablesList}>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </aside>
        </div>

        <section className={styles.section} aria-labelledby="service-faq-title">
          <h2 id="service-faq-title" className={styles.sectionTitle}>
            {detail.faqTitle}
          </h2>
          <Faq items={service.faqs} name="service-faq" />
        </section>

        <section className={styles.section} aria-labelledby="other-services-title">
          <h2 id="other-services-title" className={styles.sectionTitle}>
            {detail.otherServicesTitle}
          </h2>
          <ServicesGrid locale={locale} items={otherServices} bento={false} />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
