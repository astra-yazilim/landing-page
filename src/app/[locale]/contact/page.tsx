import type { Metadata } from "next";
import { ContactForm } from "@/components/lead/ContactForm/ContactForm";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";
import { getPath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type Channel = { icon: IconName; label: string; value: string; href?: string };

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "contact", ...getContent(locale).pages.contact.meta });
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { pages, site } = getContent(locale);
  const page = pages.contact;
  const { email, phone, whatsapp } = siteConfig.contact;

  const channels: Channel[] = [
    { icon: "mail", label: page.channelLabels.email, value: email, href: `mailto:${email}` },
    ...(phone
      ? [{ icon: "phone" as const, label: page.channelLabels.phone, value: phone, href: `tel:${phone.replace(/\s/g, "")}` }]
      : []),
    ...(whatsapp
      ? [
          {
            icon: "message" as const,
            label: page.channelLabels.whatsapp,
            value: whatsapp,
            href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
          },
        ]
      : []),
    { icon: "mapPin", label: page.channelLabels.location, value: site.city },
    { icon: "clock", label: page.channelLabels.hours, value: site.workingHours },
  ];

  return (
    <div className="container">
      <JsonLd data={pageSchema(locale, "ContactPage", "contact", page.meta)} />
      <PageHero
        locale={locale}
        crumbs={[{ label: page.meta.title, href: getPath(locale, "contact") }]}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className={styles.layout}>
        <section className={styles.formCard} aria-label={page.meta.title}>
          <ContactForm idPrefix="contact-page" source="contact-page" />
        </section>

        <aside className={styles.aside}>
          <section aria-labelledby="channels-title">
            <h2 id="channels-title" className={styles.asideTitle}>
              {page.channelsTitle}
            </h2>
            <ul className={styles.channels}>
              {channels.map((channel) => (
                <li key={channel.label} className={styles.channel}>
                  <span className={styles.channelIcon}>
                    <Icon name={channel.icon} size={18} />
                  </span>
                  <div>
                    <p className={styles.channelLabel}>{channel.label}</p>
                    {channel.href ? (
                      <a href={channel.href} className={styles.channelValue}>
                        {channel.value}
                      </a>
                    ) : (
                      <p className={styles.channelValue}>{channel.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="next-title">
            <h2 id="next-title" className={styles.asideTitle}>
              {page.nextTitle}
            </h2>
            <ol className={styles.nextSteps}>
              {page.nextSteps.map((step, index) => (
                <li key={step}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </div>
  );
}
