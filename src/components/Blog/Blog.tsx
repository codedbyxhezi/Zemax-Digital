import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import { blogPosts, featuredPost } from "@/lib/blogPosts";
import styles from "./Blog.module.css";

const principles = [
  "Klarheit vor Komplexität",
  "Premium durch Details",
  "Design mit Strategie",
  "Performance als Standard"
];

export function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.backgroundWord}>Insights</div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <p>Blog & Insights</p>
          <h2>Gedanken über Branding, Webdesign und digitale Wirkung.</h2>
        </Reveal>

        <div className={styles.featuredGrid}>
          <Reveal className={styles.featured}>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className={styles.featuredOverlay}
              aria-label={`Artikel lesen: ${featuredPost.title}`}
            />

            <div className={styles.featuredTop}>
              <span>{featuredPost.label}</span>
              <small>{featuredPost.date}</small>
            </div>

            <div className={styles.featuredContent}>
              <p>{featuredPost.category}</p>
              <h3>{featuredPost.title}</h3>
              <span>{featuredPost.excerpt}</span>
            </div>

            <div className={styles.featuredBottom}>
              <small>{featuredPost.readTime}</small>
              <Link href={`/blog/${featuredPost.slug}`}>Artikel lesen</Link>
            </div>
          </Reveal>

          <Reveal className={styles.principles} delay={120}>
            <span className={styles.principlesLabel}>Zemax Principles</span>

            <div className={styles.principlesList}>
              {principles.map((principle, index) => (
                <div key={principle}>
                  <small>0{index + 1}</small>
                  <strong>{principle}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className={styles.posts}>
          {blogPosts.map((post, index) => (
            <Reveal className={styles.post} delay={index * 90} key={post.title}>
              <Link
                href={`/blog/${post.slug}`}
                className={styles.postOverlay}
                aria-label={`Artikel lesen: ${post.title}`}
              />

              <div className={styles.postNumber}>{post.number}</div>

              <div className={styles.postBody}>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <small>{post.readTime}</small>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>

              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Lesen
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}