import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
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
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <BrandLogo />
            </Link>

            <p>
              Webentwicklung und UI/UX Design für moderne digitale Auftritte
              mit Fokus auf Qualität, Performance und klare Gestaltung.
            </p>
          </div>

          <div className={styles.navigation}>
            <span className={styles.label}>Navigation</span>

            <nav aria-label="Footer Navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.contact}>
            <span className={styles.label}>Kontakt</span>

            <h2>Bereit für dein nächstes Projekt?</h2>

            <a
              href="mailto:hello@zemax.digital"
              className={styles.email}
            >
              hello@zemax.digital
            </a>

            <Link href="/kontakt" className={styles.contactButton}>
              Projekt anfragen
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Zemax Digital</p>

          <div className={styles.legal}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>

          <div className={styles.socials}>
            <a
              href="mailto:hello@zemax.digital"
              aria-label="E-Mail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.75 5.25h16.5A1.75 1.75 0 0 1 22 7v10a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 17V7a1.75 1.75 0 0 1 1.75-1.75Zm.19 1.5L12 12.58l8.06-5.83H3.94Zm16.56 1.31-8.06 5.83a.75.75 0 0 1-.88 0L3.5 8.06V17c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25V8.06Z" />
              </svg>
            </a>

            <a
              href="https://github.com/codedbyxhezi?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.24.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17A10.88 10.88 0 0 1 12 5.91c.97 0 1.93.13 2.84.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.23 5.64.41.35.77 1.04.77 2.1v3.2c0 .31.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}