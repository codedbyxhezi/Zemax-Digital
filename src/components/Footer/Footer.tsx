import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/process" },
  { label: "Kontakt", href: "/kontakt" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.main}>
          <Reveal className={styles.brand}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Zemax Digital Startseite"
            >
              <BrandLogo />
            </Link>

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
                <Link href={item.href} key={item.label}>
                  <small>0{index + 1}</small>
                  <span>{item.label}</span>
                </Link>
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

            <Link href="/kontakt" className={styles.contactButton}>
              Anfrage starten
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <Reveal className={styles.bottom} delay={220}>
          <div className={styles.bottomMain}>
            <div className={styles.legal}>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>

            <div className={styles.socials} aria-label="Social Media">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub öffnen"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.62c-2.57.56-3.12-1.1-3.12-1.1-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.76.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.02-4.2-4.55 0-1 .36-1.83.95-2.48-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.55.95a8.8 8.8 0 0 1 4.64 0c1.77-1.2 2.55-.95 2.55-.95.5 1.27.19 2.21.1 2.44.59.65.94 1.47.94 2.48 0 3.54-2.16 4.31-4.22 4.54.33.29.63.85.63 1.72v2.43c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn öffnen"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.98H3.68V20h3.26V8.98ZM5.31 4a1.88 1.88 0 1 0 0 3.76A1.88 1.88 0 0 0 5.31 4ZM20.32 13.68c0-3.2-1.7-4.95-4.15-4.95a3.55 3.55 0 0 0-3.2 1.76V8.98H9.84V20h3.26v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.26v-6.32h.12Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram öffnen"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.55 2.75h8.9a4.8 4.8 0 0 1 4.8 4.8v8.9a4.8 4.8 0 0 1-4.8 4.8h-8.9a4.8 4.8 0 0 1-4.8-4.8v-8.9a4.8 4.8 0 0 1 4.8-4.8Zm0 1.8a3 3 0 0 0-3 3v8.9a3 3 0 0 0 3 3h8.9a3 3 0 0 0 3-3v-8.9a3 3 0 0 0-3-3h-8.9Zm9.4 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 1.8A2.95 2.95 0 1 0 12 14.95 2.95 2.95 0 0 0 12 9.05Z" />
                </svg>
              </a>
            </div>
          </div>

          <p className={styles.copyright}>
            © {year} Zemax Digital. Alle Rechte vorbehalten.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}