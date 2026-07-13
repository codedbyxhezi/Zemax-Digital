import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>Luxury Web Development</p>

          <h1>
            Digital.
            <span>Premium.</span>
          </h1>

          <div className={styles.actions}>
            <ButtonLink href="/#portfolio">Portfolio ansehen</ButtonLink>

            <ButtonLink href="/#contact" variant="ghost">
              Projekt anfragen
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}