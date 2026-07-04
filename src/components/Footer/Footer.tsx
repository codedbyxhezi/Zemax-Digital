import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import styles from "./Footer.module.css";

const footerLinks = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Expertise",
    links: [
      { label: "Brand Identity", href: "#services" },
      { label: "Web Design", href: "#services" },
      { label: "Next.js Build", href: "#services" },
      { label: "Digital Experience", href: "#services" }
    ]
  }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <BrandLogo />

          <p>
            Zemax Digital entwickelt elegante Websites, Premium-Brandings und
            digitale Auftritte mit klarer Wirkung.
          </p>

          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:hello@zemax.digital">
              Email
            </a>
          </div>
        </div>

        <div className={styles.linksWrap}>
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

          <div className={styles.contact}>
            <span>Project Inquiry</span>
            <h3>Let’s build something premium.</h3>
            <a href="mailto:hello@zemax.digital">hello@zemax.digital</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Zemax Digital. All rights reserved.</p>

        <div>
          <a href="#top">Nach oben</a>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}