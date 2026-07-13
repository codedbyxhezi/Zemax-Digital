import type { Metadata } from "next";
import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Process } from "@/components/Process/Process";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import styles from "./ProcessPage.module.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Ablauf für Webentwicklung und UI/UX Projekte",
  description:
    "Vom ersten Konzept bis zum Launch: der strukturierte Ablauf für Webentwicklung, UI Design und UX Design bei Zemax Digital.",
  path: "/process",
  keywords: [
    "Website Projektablauf",
    "Webentwicklung Prozess",
    "UI UX Design Prozess"
  ]
});

export default function ProcessPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Klarer Projektablauf</p>

              <h1>
                Von der Idee
                <span>zum Launch.</span>
              </h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Strategie, Design und Entwicklung folgen einem strukturierten
                Ablauf. So bleibt das Projekt transparent und jede Entscheidung
                führt zu einem klaren Ergebnis.
              </p>

              <div className={styles.heroMeta}>Vier Projektphasen</div>
            </div>
          </div>
        </section>

        <Process />
        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}