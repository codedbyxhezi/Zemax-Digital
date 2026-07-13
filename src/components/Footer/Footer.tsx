import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "Process", href: "/#process" },
  { label: "Kontakt", href: "/#contact" }
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com"
  },
  {
    label: "GitHub",
    href: "https://github.com"
  }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.main}>
          <Reveal className={styles.brand}>
            <a
              href="/#top"
              className={styles.logo}
              aria-label="Zemax Digital Startseite"
            >
              <BrandLogo />
            </a>

            <p>
              Individuelle Websites und digitale Auftritte mit klarer
              Gestaltung, moderner Entwicklung und hochwertiger Wirkung.
            </p>

            <div className={styles.status}>
              <i aria-hidden="true" />
              <span>Verfügbar für neue Projekte</span>
            </div>
          </Reveal>

          <Reveal className={styles.navigation} delay={90}>
            <span className={styles.label}>Navigation</span>

            <nav aria-label="Footer Navigation">
              {navigation.map((item, index) => (
                <a href={item.href} key={item.label}>
                  <small>0{index + 1}</small>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal className={styles.contact} delay={180}>
            <span className={styles.label}>Projektanfrage</span>

            <h2>Bereit für einen starken digitalen Auftritt?</h2>

            <a
              href="mailto:hello@zemax.digital"
              className={styles.email}
            >
              hello@zemax.digital
            </a>

            <a href="/#contact" className={styles.contactButton}>
              Anfrage starten
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.bottom} delay={220}>
          <p>© {year} Zemax Digital. Alle Rechte vorbehalten.</p>

          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                key={social.label}
              >
                {social.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <div className={styles.legal}>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}