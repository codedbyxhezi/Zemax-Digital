import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.actions}>
          <ButtonLink href="#portfolio">Portfolio ansehen</ButtonLink>
          <ButtonLink href="#services" variant="ghost">
            Leistungen
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}