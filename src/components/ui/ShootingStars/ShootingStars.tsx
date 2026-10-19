import type { ReactNode } from "react";
import styles from "./ShootingStars.module.css";
import { StarSky } from "./StarSky";

export function ShootingStars({ children }: { children: ReactNode }) {
  return (
    <div className={styles.scene}>
      <StarSky />
      {children}
    </div>
  );
}
