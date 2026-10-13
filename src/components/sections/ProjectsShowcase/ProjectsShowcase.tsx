"use client";

import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "motion/react";
import { useId, useMemo, useState } from "react";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { ProjectCard } from "@/components/sections/ProjectCard/ProjectCard";
import { Icon } from "@/components/ui/Icon/Icon";
import { platformIcons, projectPlatforms, type ProjectPlatform } from "@/config/projects";
import { getReferences } from "@/lib/catalog";
import { cx } from "@/lib/text";
import styles from "./ProjectsShowcase.module.css";

type Filter = ProjectPlatform | "all";

const cardEase = [0.16, 1, 0.3, 1] as const;

export function ProjectsShowcase() {
  const locale = useLocale();
  const page = useContent().pages.projects;
  const pillId = useId();
  const [filter, setFilter] = useState<Filter>("all");

  const projects = useMemo(() => getReferences(locale), [locale]);
  const filters = useMemo(
    () => [
      { id: "all" as Filter, label: page.allLabel, icon: "grid" as const, count: projects.length },
      ...projectPlatforms
        .map((platform) => ({
          id: platform as Filter,
          label: page.platforms[platform],
          icon: platformIcons[platform],
          count: projects.filter((project) => project.platform === platform).length,
        }))
        .filter((item) => item.count > 0),
    ],
    [page, projects],
  );
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.platform === filter);

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.filters} role="group" aria-label={page.filterLabel}>
        {filters.map((item) => {
          const isActive = item.id === filter;
          return (
            <button
              key={item.id}
              type="button"
              className={cx(styles.filter, isActive && styles.filterActive)}
              aria-pressed={isActive}
              onClick={() => setFilter(item.id)}
            >
              {isActive ? (
                <motion.span
                  layoutId={pillId}
                  className={styles.pill}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              ) : null}
              <span className={styles.filterContent}>
                <Icon name={item.icon} size={16} />
                {item.label}
                <span className={styles.count}>{item.count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <ul className={styles.grid}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                className={styles.item}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: cardEase, delay: Math.min(index, 8) * 0.03 }}
              >
                <ProjectCard project={project} headingLevel="h2" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </LayoutGroup>
    </MotionConfig>
  );
}
