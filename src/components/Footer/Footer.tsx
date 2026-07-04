import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import { Reveal } from "@/components/Reveal/Reveal";
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
        <Reveal className={styles.brand}>
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
            <a href="mailto:hello@zemax.digital">Email</a>
          </div>
        </Reveal>

        <div className={styles.linksWrap}>
          {footerLinks.map((column, index) => (
            <Reveal
              className={styles.column}
              delay={index * 90}
              key={column.title}
            >
              <h3>{column.title}</h3>

              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </Reveal>
          ))}

          <Reveal className={styles.contact} delay={180}>
            <span>Project Inquiry</span>
            <h3>Let’s build something premium.</h3>
            <a href="mailto:hello@zemax.digital">hello@zemax.digital</a>
          </Reveal>
        </div>
      </div>

      <Reveal className={`container ${styles.bottom}`} delay={120}>
        <p>© {year} Zemax Digital. All rights reserved.</p>

        <div>
          <a href="#top">Nach oben</a>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
        </div>
      </Reveal>
    </footer>
  );
}