import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Zemax Digital hat unseren digitalen Auftritt deutlich hochwertiger und klarer gemacht. Genau der Premium-Look, den wir gesucht haben.",
    name: "M. Aurelia",
    role: "Founder · Luxury Brand"
  },
  {
    quote:
      "Sehr sauberes Design, starke Umsetzung und ein Gefühl für Details. Die Website wirkt modern, elegant und professionell.",
    name: "D. Noir",
    role: "Creative Director"
  },
  {
    quote:
      "Vom ersten Konzept bis zum Launch war alles strukturiert. Das Ergebnis wirkt hochwertig und passt perfekt zu unserer Marke.",
    name: "L. Marek",
    role: "Brand Consultant"
  }
];

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <p>Testimonials</p>
          <h2>Was Kunden über den Auftritt sagen.</h2>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal
              className={`${styles.card} ${index === 1 ? styles.featured : ""}`}
              delay={index * 100}
              key={testimonial.name}
            >
              <div className={styles.quoteMark}>“</div>

              <p className={styles.quote}>{testimonial.quote}</p>

              <div className={styles.person}>
                <span>{testimonial.name}</span>
                <small>{testimonial.role}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}