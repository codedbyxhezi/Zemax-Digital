import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.panel}`}>
        <div className={styles.logoWrap}>
          <BrandLogo compact />
        </div>
        <h2>Bereit für eine Marke mit Premium-Wirkung?</h2>
        <p>
          Starte dein Projekt mit Zemax Digital und verwandle dein digitales Auftreten in ein hochwertiges Markenerlebnis.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="mailto:hello@zemaxdigital.com">hello@zemaxdigital.com</ButtonLink>
          <ButtonLink href="#top" variant="ghost">
            Nach oben
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
