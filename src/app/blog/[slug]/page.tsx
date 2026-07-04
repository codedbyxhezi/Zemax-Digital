import Link from "next/link";
import { notFound } from "next/navigation";
import { allBlogPosts, blogPosts } from "@/lib/blogPosts";
import styles from "./BlogPost.module.css";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog | Zemax Digital"
    };
  }

  return {
    title: `${post.title} | Zemax Digital`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/#blog" className={styles.back}>
            Zurück zum Blog
          </Link>

          <div className={styles.meta}>
            <span>{post.category}</span>
            <small>{post.readTime}</small>
          </div>

          <h1>{post.title}</h1>

          <p>{post.excerpt}</p>
        </div>
      </section>

      <section className={styles.articleSection}>
        <div className={`container ${styles.articleInner}`}>
          <article className={styles.article}>
            {post.content.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? styles.lead : ""}>
                {paragraph}
              </p>
            ))}

            <div className={styles.highlight}>
              <span>Zemax Principle</span>
              <strong>
                Gute digitale Auftritte wirken hochwertig, weil Strategie,
                Design und Technik zusammenpassen.
              </strong>
            </div>
          </article>

          <div className={styles.ctaBox}>
            <span>Zemax Digital</span>
            <h2>Du möchtest auch einen hochwertigeren Web-Auftritt?</h2>
            <Link href="/#contact">Projekt anfragen</Link>
          </div>
        </div>
      </section>

      <section className={styles.related}>
        <div className={`container ${styles.relatedInner}`}>
          <div className={styles.relatedHeader}>
            <p>Weiterlesen</p>
            <h2>Weitere Insights</h2>
          </div>

          <div className={styles.relatedGrid}>
            {relatedPosts.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                className={styles.relatedCard}
                key={item.slug}
              >
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <small>{item.readTime}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}