"use client";

import type { PointerEvent } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { DeviceMockup } from "@/components/ui/DeviceMockup/DeviceMockup";
import { Icon } from "@/components/ui/Icon/Icon";
import { platformIcons, projectImageSizes } from "@/config/projects";
import type { Project } from "@/lib/catalog";
import { cx } from "@/lib/text";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

const maxTilt = 7;

export function ProjectCard({ project, headingLevel: Heading = "h3" }: ProjectCardProps) {
  const page = useContent().pages.projects;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const { style } = event.currentTarget;
    style.setProperty("--tilt-x", `${((0.5 - y) * maxTilt).toFixed(2)}deg`);
    style.setProperty("--tilt-y", `${((x - 0.5) * maxTilt).toFixed(2)}deg`);
    style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
    style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      className={cx(styles.card, styles[project.platform])}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={cx(styles.stage, styles[project.device])}>
        <span className={styles.badge}>
          <Icon name={platformIcons[project.platform]} size={14} />
          {page.platforms[project.platform]}
        </span>
        <div className={styles.device}>
          <DeviceMockup
            device={project.device}
            image={project.image}
            alt={`${project.title} — ${page.previewLabel}`}
            sizes={projectImageSizes}
          />
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <Heading className={styles.title}>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </Heading>
        <p className={styles.summary}>{project.summary}</p>
        {project.url ? (
          <span className={styles.visit} aria-hidden="true">
            {page.visitLabel}
            <Icon name="arrowUpRight" size={16} />
          </span>
        ) : null}
      </div>
    </article>
  );
}
