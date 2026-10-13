import { ProjectCard } from "@/components/sections/ProjectCard/ProjectCard";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import type { Locale } from "@/config/i18n";
import { getProjects, type Project } from "@/lib/catalog";
import styles from "./ProjectsGrid.module.css";

type ProjectsGridProps = {
  locale: Locale;
  items?: Project[];
  headingLevel?: "h2" | "h3";
};

export function ProjectsGrid({ locale, items, headingLevel = "h3" }: ProjectsGridProps) {
  const projects = items ?? getProjects(locale);

  return (
    <ul className={styles.grid}>
      {projects.map((project, index) => (
        <li key={project.id} className={styles.item}>
          <Reveal delay={(index % 3) * 0.08} className={styles.reveal}>
            <ProjectCard project={project} headingLevel={headingLevel} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
