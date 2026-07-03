import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import styles from "./Footer.module.css";

const footerLinks = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" }
    ]
  },
  {
    title: "Luxury Digital",
    links: [
      { label: "Brand Identity", href: "#services" },
      { label: "Web Design", href: "#services" },
      { label: "Next.js Development", href: "#services" },
      { label: "Conversion Design", href: "#portfolio" }
    ]
  }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandArea}>
          <BrandLogo />

          <p className={styles.description}>
            Zemax Digital entwickelt hochwertige Markenauftritte, moderne
            Portfolio-Websites und performante digitale Erlebnisse für Premium
            Brands.
          </p>

          <div className={styles.socials} aria-label="Social Links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
          </div>
        </div>

        <div className={styles.linkColumns}>
          {footerLinks.map((column) => (
            <nav className={styles.column} key={column.title}>
              <h3>{column.title}</h3>

              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}

          <div className={styles.contactCard}>
            <span className={styles.label}>Projekt starten</span>
            <h3>Bereit für einen luxuriösen digitalen Auftritt?</h3>
            <a className={styles.mailLink} href="mailto:hello@zemax.digital">
              hello@zemax.digital
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Zemax Digital. All rights reserved.</p>

        <div className={styles.legal}>
          <a href="#top">Nach oben</a>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}