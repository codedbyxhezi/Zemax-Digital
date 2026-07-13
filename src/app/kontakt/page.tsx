import type { Metadata } from "next";
import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import styles from "./KontaktPage.module.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Webentwicklung in München anfragen",
  description:
    "Webentwicklung, UI Design oder UX Design anfragen. Zemax Digital betreut Unternehmen in München, Bayern und deutschlandweit.",
  path: "/kontakt",
  keywords: [
    "Webentwickler München Kontakt",
    "Website erstellen lassen München",
    "UI UX Projekt anfragen"
  ]
});

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Projektanfrage</p>

              <h1>
                Lass uns etwas
                <span>Starkes bauen.</span>
              </h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Beschreibe dein Projekt, deine Ziele und die gewünschte
                Richtung. Du erhältst eine persönliche Rückmeldung mit den
                möglichen nächsten Schritten.
              </p>

              <div className={styles.heroMeta}>Neue Projekte willkommen</div>
            </div>
          </div>
        </section>

        <section className={styles.contactInformation}>
          <div className={`container ${styles.contactGrid}`}>
            <div className={styles.contactItem}>
              <span>E-Mail</span>
              <a href="mailto:hello@zemax.digital">
                hello@zemax.digital
              </a>
            </div>

            <div className={styles.contactItem}>
              <span>Antwortzeit</span>
              <strong>Innerhalb von 24–48 Stunden</strong>
            </div>

            <div className={styles.contactItem}>
              <span>Zusammenarbeit</span>
              <strong>Deutschland und weltweit</strong>
            </div>
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}