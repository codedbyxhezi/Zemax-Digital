import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className={styles.header}>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Reveal>
  );
}
