import type { Metadata } from "next";
import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { Services } from "@/components/Services/Services";
import styles from "./ServicesPage.module.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Webentwicklung & UI/UX Design in München",
  description:
    "Webentwicklung, UI Design und UX Design für Unternehmen in München. Zemax Digital entwickelt schnelle, responsive und individuelle Websites.",
  path: "/services",
  keywords: [
    "Webentwicklung München",
    "UI Design München",
    "UX Design München",
    "Next.js Entwicklung München"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Zemax Digital · Expertise</p>

              <h1>
                Digital
                <span>Services.</span>
              </h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Von der visuellen Identität bis zur fertigen Website entstehen
                digitale Auftritte mit klarer Strategie, hochwertigem Design
                und sauberer technischer Umsetzung.
              </p>

              <div className={styles.heroMeta}>Vier Kernbereiche</div>
            </div>
          </div>
        </section>

        <Services />
        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}