import type { Metadata } from "next";
import { Blog } from "@/components/Blog/Blog";
import styles from "./BlogPage.module.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Webentwicklung, UI & UX Blog",
  description:
    "Artikel über Webentwicklung, UI Design, UX Design, Next.js, Website-Performance und digitale Markenauftritte.",
  path: "/blog",
  keywords: [
    "Webentwicklung Blog",
    "UI Design Blog",
    "UX Design Blog",
    "Next.js Blog"
  ]
});

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Insights und Wissen</p>

            <h1>
              Digital
              <span>Journal.</span>
            </h1>
          </div>

          <div className={styles.heroDescription}>
            <p>
              Gedanken, Erfahrungen und praktische Einblicke rund um
              Webdesign, Markenwirkung, Nutzerführung und moderne
              Webentwicklung.
            </p>

            <div className={styles.heroMeta}>
              Design und Technologie
            </div>
          </div>
        </div>
      </section>

      <Blog />
    </main>
  );
}