"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Der neue Auftritt wirkt deutlich hochwertiger und professioneller. Genau die Richtung, die wir für unsere Marke gesucht haben.",
    name: "M. Aurelia",
    role: "Founder",
    company: "Luxury Brand",
    project: "Brand Identity & Website"
  },
  {
    quote:
      "Das Ergebnis fühlt sich nicht wie ein Template an. Die Website besitzt eine eigene Persönlichkeit und passt endlich zu unserer Marke.",
    name: "D. Noir",
    role: "Creative Director",
    company: "Noir Studio",
    project: "Web Design & Development"
  },
  {
    quote:
      "Die Zusammenarbeit war klar, schnell und strukturiert. Besonders die mobile Umsetzung und die kleinen Details haben überzeugt.",
    name: "L. Marek",
    role: "Brand Consultant",
    company: "Marek Consulting",
    project: "Digital Experience"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(showNext, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, showNext]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className={styles.testimonials}>
      <div className={styles.backgroundWord}>Voices</div>

      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div>
            <p>Testimonials</p>
            <h2>Was Kunden über die Zusammenarbeit sagen.</h2>
          </div>

          <span>
            Erfahrungen aus Branding-, Webdesign- und Entwicklungsprojekten.
          </span>
        </header>

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <article className={styles.card}>
            <div className={styles.sidebar}>
              <div className={styles.counter}>
                <strong>0{activeIndex + 1}</strong>
                <span>/ 0{testimonials.length}</span>
              </div>

              <div className={styles.client}>
                <span>Client</span>
                <strong>{activeTestimonial.name}</strong>
                <p>
                  {activeTestimonial.role}
                  <br />
                  {activeTestimonial.company}
                </p>
              </div>

              <div className={styles.project}>
                <span>Project</span>
                <strong>{activeTestimonial.project}</strong>
              </div>
            </div>

            <div className={styles.quoteArea} key={activeIndex}>
              <span className={styles.quoteMark}>“</span>

              <blockquote>{activeTestimonial.quote}</blockquote>

              <div className={styles.signature}>
                <span>Zemax Digital</span>
                <small>Client Experience</small>
              </div>
            </div>
          </article>

          <div className={styles.controls}>
            <div className={styles.arrows}>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Vorheriges Testimonial"
              >
                ←
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Nächstes Testimonial"
              >
                →
              </button>
            </div>

            <div className={styles.dots}>
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  className={index === activeIndex ? styles.activeDot : ""}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Testimonial von ${testimonial.name} anzeigen`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  key={testimonial.name}
                >
                  <span />
                </button>
              ))}
            </div>

            <div className={styles.progress}>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <div>
                <i
                  style={{
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}