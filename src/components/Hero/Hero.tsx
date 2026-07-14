import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Image
        src="/images/hero-webdev.png"
        alt=""
        fill
        preload
        sizes="100vw"
        quality={65}
        className={styles.heroImage}
      />

      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            Webentwicklung · UI/UX · München
          </p>

          <h1>
            Digital.
            <span>Premium.</span>
          </h1>

          <p className={styles.description}>
            Zemax Digital entwickelt performante Websites und digitale
            Erlebnisse für Unternehmen in München, Bayern und
            deutschlandweit.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="/portfolio">
              Portfolio ansehen
            </ButtonLink>

            <ButtonLink href="/kontakt" variant="ghost">
              Projekt anfragen
            </ButtonLink>
          </div>
        </div>
      </div>

      <a
        href="/#services"
        className={styles.scrollIndicator}
        aria-label="Zu den Services scrollen"
      >
        <span className={styles.mouse} aria-hidden="true">
          <i />
        </span>

        <span className={styles.scrollText}>Scrollen</span>
      </a>
    </section>
  );
}