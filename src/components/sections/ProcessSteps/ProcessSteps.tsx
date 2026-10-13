import { Icon, type IconName } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ProcessSteps.module.css";

type ProcessStepsProps = {
  steps: { title: string; text: string; icon: IconName }[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <Reveal delay={index * 0.08}>
            <div className={styles.head}>
              <span className={styles.icon}>
                <Icon name={step.icon} size={20} />
              </span>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
