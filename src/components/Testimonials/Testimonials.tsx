import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Clients"
          title="Markenwirkung, die man spürt."
          description="Feedback von Premium-Kunden, die ein digitales Erscheinungsbild mit mehr Wertigkeit und Klarheit wollten."
        />
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <figure className={styles.quoteCard}>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
