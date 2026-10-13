import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { getProducts } from "@/lib/catalog";
import { cx } from "@/lib/text";
import styles from "./ProductsStrip.module.css";

type ProductsStripProps = {
  locale: Locale;
  index?: string;
  titleId?: string;
};

export function ProductsStrip({ locale, index, titleId = "products-title" }: ProductsStripProps) {
  const { products } = getContent(locale).home;
  const productsPath = getPath(locale, "products");

  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <SectionHeading
          id={titleId}
          index={index}
          eyebrow={products.eyebrow}
          title={products.title}
          description={products.description}
        />
        <Button href={productsPath} variant="glass" icon="arrowRight">
          {products.cta}
        </Button>
      </div>
      <ul className={styles.list}>
        {getProducts(locale).map((product) => (
          <li key={product.id}>
            <Link href={`${productsPath}#${product.id}`} className={cx(styles.tile, styles[product.accent])}>
              <span className={styles.icon}>
                <Icon name={product.icon} size={22} />
              </span>
              <span className={styles.text}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.tagline}>{product.tagline}</span>
              </span>
              <Icon name="chevronRight" size={18} className={styles.chevron} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
