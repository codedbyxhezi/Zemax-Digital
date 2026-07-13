"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import styles from "./Navbar.module.css";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/process" },
  { label: "Kontakt", href: "/kontakt" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <button
          className={`${styles.burger} ${
            isOpen ? styles.burgerOpen : ""
          }`}
          type="button"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={styles.links} aria-label="Hauptnavigation">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Zemax Digital Startseite"
          onClick={closeMenu}
        >
          <BrandLogo />
        </Link>

        <div className={styles.right}>
          <div className={styles.socials} aria-label="Social Media">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn öffnen"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.98H3.68V20h3.26V8.98ZM5.31 4a1.88 1.88 0 1 0 0 3.76 1.88 1.88 0 0 0 0-3.76ZM20.32 13.68c0-3.2-1.7-4.95-4.15-4.95a3.55 3.55 0 0 0-3.2 1.76V8.98H9.84V20h3.26v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.26v-6.32h.12Z" />
              </svg>
            </a>

            <a
              href="https://github.com/codedbyxhezi?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub öffnen"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.62c-2.57.56-3.12-1.1-3.12-1.1-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.76.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.02-4.2-4.55 0-1 .36-1.83.95-2.48-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.55.95a8.8 8.8 0 0 1 4.64 0c1.77-1.2 2.55-.95 2.55-.95.5 1.27.19 2.21.1 2.44.59.65.94 1.47.94 2.48 0 3.54-2.16 4.31-4.22 4.54.33.29.63.85.63 1.72v2.43c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z" />
              </svg>
            </a>
          </div>

          <div className={styles.cta}>
            <ButtonLink href="/kontakt" variant="ghost">
              Projekt anfragen
            </ButtonLink>
          </div>
        </div>

        <Link
          href="/kontakt"
          className={styles.mobileMail}
          aria-label="Kontaktseite öffnen"
          onClick={closeMenu}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.75 5.75h14.5c.96 0 1.75.79 1.75 1.75v9c0 .96-.79 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 16.5v-9c0-.96.79-1.75 1.75-1.75Zm.1 2 7.15 5.02 7.15-5.02H4.85Zm14.4 8.75V9.44l-6.82 4.79a.75.75 0 0 1-.86 0L4.75 9.44v7.06h14.5Z" />
          </svg>
        </Link>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={`container ${styles.mobileInner}`}>
          <nav
            className={styles.mobileLinks}
            aria-label="Mobile Navigation"
          >
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <small>0{index + 1}</small>
              </Link>
            ))}
          </nav>

          <div className={styles.mobileBottom}>
            <Link
              href="/kontakt"
              className={styles.mobileCta}
              onClick={closeMenu}
            >
              Anfrage starten
            </Link>

            <div className={styles.mobileSocials}>
              <a href="mailto:hello@zemax.digital">E-Mail</a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}