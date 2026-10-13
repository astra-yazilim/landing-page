import type { Metadata } from "next";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid/ProjectsGrid";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { DeviceMockup } from "@/components/ui/DeviceMockup/DeviceMockup";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { projectImageSizes } from "@/config/projects";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { getOwnProjects, getProducts } from "@/lib/catalog";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { productListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cx } from "@/lib/text";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { meta } = getContent(locale).pages.products;
  return buildMetadata({ locale, routeId: "products", title: meta.title, description: meta.description });
}

export default async function ProductsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { pages } = getContent(locale);
  const page = pages.products;

  return (
    <>
      <JsonLd data={productListSchema(locale, getProducts(locale))} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "products") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />

        <section className={styles.live} aria-labelledby="live-products-title">
          <Reveal className={styles.head}>
            <SectionHeading id="live-products-title" title={page.liveTitle} description={page.liveDescription} />
          </Reveal>
          <ProjectsGrid locale={locale} items={getOwnProjects(locale)} headingLevel="h3" />
        </section>

        <Reveal className={styles.catalogHead}>
          <SectionHeading title={page.catalogTitle} description={page.catalogDescription} />
        </Reveal>

        <div className={styles.products}>
          {getProducts(locale).map((product, index) => (
            <section
              key={product.id}
              id={product.id}
              className={cx(styles.product, styles[product.accent])}
              aria-labelledby={`${product.id}-title`}
            >
              <Reveal className={styles.visual}>
                <DeviceMockup
                  device="laptop"
                  image={product.image}
                  alt={`${product.name} — ${pages.projects.previewLabel}`}
                  sizes={projectImageSizes}
                />
              </Reveal>
              <Reveal delay={0.08} className={styles.copy}>
                <p className={styles.label}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <Icon name={product.icon} size={18} />
                </p>
                <h2 id={`${product.id}-title`} className={styles.name}>
                  {product.name}
                </h2>
                <p className={styles.tagline}>{product.tagline}</p>
                <p className={styles.description}>{product.description}</p>
                <ul className={styles.features}>
                  {product.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <LeadButton
                  variant="glass"
                  icon="arrowUpRight"
                  defaults={{ source: `product-${product.id}`, message: page.inquiryMessage(product.name) }}
                >
                  {page.cta}
                </LeadButton>
              </Reveal>
            </section>
          ))}
        </div>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
