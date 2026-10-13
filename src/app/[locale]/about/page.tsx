import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "about", ...getContent(locale).pages.about.meta });
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { pages, home } = getContent(locale);
  const page = pages.about;

  return (
    <>
      <JsonLd data={pageSchema(locale, "AboutPage", "about", page.meta)} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "about") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />

        <section className={styles.story} aria-labelledby="story-title">
          <h2 id="story-title" className={styles.title}>
            {page.storyTitle}
          </h2>
          <div className={styles.storyText}>
            {page.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="principles-title">
          <h2 id="principles-title" className={styles.title}>
            {page.principlesTitle}
          </h2>
          <ul className={styles.principles}>
            {page.principles.map((principle, index) => (
              <li key={principle.title}>
                <Reveal delay={index * 0.06} className={styles.reveal}>
                  <SpotlightCard accent={index % 2 ? "indigo" : "emerald"} className={styles.principle}>
                    <Icon name={principle.icon} size={24} className={styles.principleIcon} />
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principleText}>{principle.text}</p>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="about-process-title">
          <div className={styles.head}>
            <SectionHeading id="about-process-title" eyebrow={home.process.eyebrow} title={home.process.title} />
          </div>
          <ProcessSteps steps={home.process.steps} />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
