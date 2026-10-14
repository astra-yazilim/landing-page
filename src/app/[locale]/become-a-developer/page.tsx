import type { Metadata } from "next";
import { DeveloperApplicationForm } from "@/components/developers/DeveloperApplicationForm/DeveloperApplicationForm";
import { Faq } from "@/components/sections/Faq/Faq";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import type { IconStep } from "@/content/types";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

const formAnchor = "application";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "developers", ...getContent(locale).pages.developers.meta });
}

function CardGrid({ items }: { items: IconStep[] }) {
  return (
    <ul className={styles.cards}>
      {items.map((item, index) => (
        <li key={item.title}>
          <Reveal delay={index * 0.06} className={styles.reveal}>
            <SpotlightCard accent={index % 2 ? "indigo" : "emerald"} className={styles.card}>
              <Icon name={item.icon} size={24} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default async function DevelopersPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.developers;

  return (
    <div className="container">
      <JsonLd data={pageSchema(locale, "WebPage", "developers", page.meta)} />
      <PageHero
        locale={locale}
        crumbs={[{ label: page.meta.title, href: getPath(locale, "developers") }]}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      >
        <div className={styles.actions}>
          <Button href={`#${formAnchor}`} size="lg" icon="arrowRight">
            {page.primaryCta}
          </Button>
          <Button href={getPath(locale, "developerAgreement")} variant="glass" size="lg" icon="fileText">
            {page.secondaryCta}
          </Button>
        </div>
      </PageHero>

      <section className={styles.section} aria-labelledby="developer-steps-title">
        <h2 id="developer-steps-title" className={styles.title}>
          {page.stepsTitle}
        </h2>
        <ProcessSteps steps={page.steps} />
      </section>

      <section className={styles.section} aria-labelledby="developer-models-title">
        <h2 id="developer-models-title" className={styles.title}>
          {page.modelsTitle}
        </h2>
        <CardGrid items={page.models} />
      </section>

      <section className={styles.section} aria-labelledby="developer-benefits-title">
        <h2 id="developer-benefits-title" className={styles.title}>
          {page.benefitsTitle}
        </h2>
        <CardGrid items={page.benefits} />
      </section>

      <div className={styles.applyLayout}>
        <section id={formAnchor} className={styles.formCard} aria-labelledby="developer-form-title">
          <h2 id="developer-form-title" className={styles.formTitle}>
            {page.form.title}
          </h2>
          <DeveloperApplicationForm idPrefix="developer" />
        </section>

        <section className={styles.faq} aria-labelledby="developer-faq-title">
          <h2 id="developer-faq-title" className={styles.title}>
            {page.faqTitle}
          </h2>
          <Faq items={page.faq} name="developer-faq" />
        </section>
      </div>
    </div>
  );
}
