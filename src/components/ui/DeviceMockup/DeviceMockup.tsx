import Image from "next/image";
import type { DeviceType } from "@/config/projects";
import { cx } from "@/lib/text";
import styles from "./DeviceMockup.module.css";

type DeviceMockupProps = {
  device: DeviceType;
  image: string | null;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function DeviceMockup({ device, image, alt, sizes, priority = false }: DeviceMockupProps) {
  return (
    <div className={cx(styles.device, styles[device])}>
      {device === "browser" ? (
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.address} />
        </div>
      ) : null}
      <div className={styles.screen}>
        {image ? (
          <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className={styles.shot} />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={alt}>
            <span className={styles.sidebar} />
            <div className={styles.content}>
              <span className={styles.heading} />
              <div className={styles.stats}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.chart}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}
      </div>
      {device === "laptop" ? <div className={styles.base} aria-hidden="true" /> : null}
    </div>
  );
}
