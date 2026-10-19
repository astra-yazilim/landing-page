"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import styles from "./ShootingStars.module.css";

type Star = { id: string; top: number; left: number; delay: number; length: number };

const leftRange = [30, 70] as const;
const minGap = 15;

const random = (min: number, max: number) => min + Math.random() * (max - min);

function createStars(): Star[] {
  const id = Date.now().toString(36);
  const firstLeft = random(...leftRange);
  let secondLeft = random(...leftRange);
  while (Math.abs(secondLeft - firstLeft) < minGap) secondLeft = random(...leftRange);

  return [
    { id: `${id}-a`, top: random(2, 12), left: firstLeft, delay: random(0.6, 1), length: random(100, 150) },
    { id: `${id}-b`, top: random(10, 20), left: secondLeft, delay: random(2.2, 2.8), length: random(90, 130) },
  ];
}

export function StarSky() {
  const pathname = usePathname();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(createStars());
  }, [pathname]);

  return (
    <div className={styles.sky} aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={styles.star}
          style={
            {
              "--top": `${star.top}%`,
              "--left": `${star.left}%`,
              "--delay": `${star.delay}s`,
              "--length": `${star.length}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
