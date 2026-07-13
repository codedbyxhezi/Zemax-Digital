import type { Metadata } from "next";
import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { PortfolioGrid } from "@/components/PortfolioGrid/PortfolioGrid";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import styles from "./PortfolioPage.module.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Webdesign & Webentwicklung Referenzen",
  description:
    "Ausgewählte Webentwicklungs-, UI- und UX-Projekte von Zemax Digital. Individuelle Websites für Unternehmen und Marken.",
  path: "/portfolio",
  keywords: [
    "Webdesign Referenzen München",
    "Webentwicklung Portfolio",
    "Next.js Projekte",
    "UI UX Portfolio"
  ]
});

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Ausgewählte Arbeiten</p>

              <h1>
                Echte
                <span>Projekte.</span>
              </h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Individuell entwickelte Websites aus unterschiedlichen
                Branchen. Jedes Projekt verbindet eine eigene visuelle
                Richtung mit responsiver und moderner Entwicklung.
              </p>

              <div className={styles.heroMeta}>Design und Development</div>
            </div>
          </div>
        </section>

        <PortfolioGrid />
        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}