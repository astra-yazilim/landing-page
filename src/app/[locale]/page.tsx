import { AuditPanel } from "@/components/sections/AuditPanel/AuditPanel";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { Comparison } from "@/components/sections/Comparison/Comparison";
import { Faq } from "@/components/sections/Faq/Faq";
import { Hero } from "@/components/sections/Hero/Hero";
import { ProductsStrip } from "@/components/sections/ProductsStrip/ProductsStrip";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid/ProjectsGrid";
import { PricingTabs } from "@/components/sections/PricingTabs/PricingTabs";
import { ProcessSteps } from "@/components/sections/ProcessSteps/ProcessSteps";
import { ServicesGrid } from "@/components/sections/ServicesGrid/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { getReferences } from "@/lib/catalog";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { faqSchema, serviceListSchema } from "@/lib/schema";
import { getServices } from "@/lib/services";
import { cx } from "@/lib/text";
import styles from "./page.module.css";

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { home, faq } = getContent(locale);
  const featuredProjects = getReferences(locale).filter((project) => project.featured);

  return (
    <>
      <JsonLd data={[serviceListSchema(locale, getServices(locale)), faqSchema(faq.general)]} />
      <Hero locale={locale} />
      <Comparison locale={locale} index="01" />

      <section className={styles.section} aria-labelledby="services-title">
        <div className="container">
          <Reveal className={styles.splitHead}>
            <SectionHeading
              id="services-title"
              index="02"
              eyebrow={home.services.eyebrow}
              title={home.services.title}
            />
            <div className={styles.aside}>
              <p>{home.services.description}</p>
              <Button href={getPath(locale, "services")} variant="ghost" icon="arrowRight" className={styles.link}>
                {home.services.cta}
              </Button>
            </div>
          </Reveal>
          <ServicesGrid locale={locale} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="products-title">
        <div className="container">
          <Reveal>
            <ProductsStrip locale={locale} index="03" />
          </Reveal>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="projects-title">
        <div className="container">
          <Reveal className={styles.splitHead}>
            <SectionHeading
              id="projects-title"
              index="04"
              eyebrow={home.projects.eyebrow}
              title={home.projects.title}
            />
            <div className={styles.aside}>
              <p>{home.projects.description}</p>
              <Button href={getPath(locale, "projects")} variant="ghost" icon="arrowRight" className={styles.link}>
                {home.projects.cta}
              </Button>
            </div>
          </Reveal>
          <ProjectsGrid locale={locale} items={featuredProjects} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="pricing-title">
        <div className="container">
          <Reveal className={styles.splitHead}>
            <SectionHeading id="pricing-title" index="05" eyebrow={home.pricing.eyebrow} title={home.pricing.title} />
            <div className={styles.aside}>
              <p>{home.pricing.description}</p>
              <Button href={getPath(locale, "pricing")} variant="ghost" icon="arrowRight" className={styles.link}>
                {home.pricing.cta}
              </Button>
            </div>
          </Reveal>
          <PricingTabs />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="audit-title">
        <div className="container">
          <Reveal>
            <AuditPanel locale={locale} index="06" />
          </Reveal>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="process-title">
        <div className="container">
          <Reveal className={styles.head}>
            <SectionHeading
              id="process-title"
              index="07"
              eyebrow={home.process.eyebrow}
              title={home.process.title}
            />
          </Reveal>
          <ProcessSteps steps={home.process.steps} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={cx("container", styles.faqLayout)}>
          <Reveal>
            <SectionHeading id="faq-title" index="08" eyebrow={home.faq.eyebrow} title={home.faq.title} />
          </Reveal>
          <Faq items={faq.general} name="home-faq" />
        </div>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
