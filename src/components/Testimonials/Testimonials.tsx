"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type TouchEvent
} from "react";
import styles from "./Testimonials.module.css";

const AUTOPLAY_DELAY = 7000;
const SWIPE_DISTANCE = 55;

type Direction = "next" | "previous";

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
  const [direction, setDirection] = useState<Direction>("next");
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const showNext = useCallback(() => {
    setDirection("next");

    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  }, []);

  const showPrevious = useCallback(() => {
    setDirection("previous");

    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  }, []);

  const showTestimonial = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      setDirection(index > activeIndex ? "next" : "previous");
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (isPaused || reducedMotion.matches) return;

    const timer = window.setTimeout(
      showNext,
      AUTOPLAY_DELAY
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isPaused, showNext]);

  const handleBlur = (
    event: FocusEvent<HTMLDivElement>
  ) => {
    const nextElement = event.relatedTarget as Node | null;

    if (
      !nextElement ||
      !event.currentTarget.contains(nextElement)
    ) {
      setIsPaused(false);
    }
  };

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;

    setIsPaused(true);
  };

  const handleTouchEnd = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    const touch = event.changedTouches[0];

    touchStartX.current = null;
    touchStartY.current = null;

    if (startX === null || startY === null) {
      setIsPaused(false);
      return;
    }

    const distanceX = touch.clientX - startX;
    const distanceY = touch.clientY - startY;

    const isHorizontalSwipe =
      Math.abs(distanceX) > SWIPE_DISTANCE &&
      Math.abs(distanceX) > Math.abs(distanceY) * 1.2;

    if (isHorizontalSwipe) {
      if (distanceX < 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setIsPaused(false);
  };

  const activeTestimonial =
    testimonials[activeIndex];

  const progress =
    ((activeIndex + 1) / testimonials.length) * 100;

  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
    >
      <div
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        Voices
      </div>

      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div>
            <p>Testimonials</p>

            <h2 id="testimonials-heading">
              Was Kunden über die Zusammenarbeit sagen.
            </h2>
          </div>

          <span>
            Erfahrungen aus Branding-, Webdesign- und
            Entwicklungsprojekten.
          </span>
        </header>

        <div
          className={`${styles.carousel} ${
            isPaused ? styles.paused : ""
          }`}
          role="region"
          aria-roledescription="Karussell"
          aria-label="Kundenstimmen"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={handleBlur}
        >
          <div
            className={styles.viewport}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => {
              touchStartX.current = null;
              touchStartY.current = null;
              setIsPaused(false);
            }}
          >
            <article
              key={activeIndex}
              className={`${styles.card} ${
                direction === "next"
                  ? styles.slideNext
                  : styles.slidePrevious
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className={styles.sidebar}>
                <div className={styles.counter}>
                  <strong>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </strong>

                  <span>
                    /{" "}
                    {String(testimonials.length).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                <div className={styles.client}>
                  <span>Client</span>

                  <strong>
                    {activeTestimonial.name}
                  </strong>

                  <p>
                    {activeTestimonial.role}
                    <br />
                    {activeTestimonial.company}
                  </p>
                </div>

                <div className={styles.project}>
                  <span>Project</span>

                  <strong>
                    {activeTestimonial.project}
                  </strong>
                </div>
              </div>

              <div className={styles.quoteArea}>
                <span
                  className={styles.quoteMark}
                  aria-hidden="true"
                >
                  “
                </span>

                <blockquote>
                  {activeTestimonial.quote}
                </blockquote>

                <div className={styles.signature}>
                  <span>Zemax Digital</span>
                  <small>Client Experience</small>
                </div>
              </div>
            </article>
          </div>

          <div className={styles.controls}>
            <div className={styles.arrows}>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Vorheriges Testimonial"
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Nächstes Testimonial"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div
              className={styles.dots}
              aria-label="Testimonial auswählen"
            >
              {testimonials.map(
                (testimonial, index) => (
                  <button
                    type="button"
                    className={
                      index === activeIndex
                        ? styles.activeDot
                        : ""
                    }
                    onClick={() =>
                      showTestimonial(index)
                    }
                    aria-label={`Testimonial von ${testimonial.name} anzeigen`}
                    aria-current={
                      index === activeIndex
                        ? "true"
                        : undefined
                    }
                    key={testimonial.name}
                  >
                    <span />
                  </button>
                )
              )}
            </div>

            <div className={styles.progress}>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <div>
                <i
                  style={{
                    width: `${progress}%`
                  }}
                />
              </div>
            </div>
          </div>

          <p className={styles.swipeHint}>
            Auf dem Handy wischen
          </p>
        </div>
      </div>
    </section>
  );
}