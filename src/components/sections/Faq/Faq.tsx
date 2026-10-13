import { Icon } from "@/components/ui/Icon/Icon";
import type { FaqItem } from "@/content/types";
import styles from "./Faq.module.css";

type FaqProps = {
  items: FaqItem[];
  name: string;
};

export function Faq({ items, name }: FaqProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.question} className={styles.item} name={name}>
          <summary className={styles.question}>
            <span>{item.question}</span>
            <span className={styles.toggle}>
              <Icon name="plus" size={18} />
            </span>
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
