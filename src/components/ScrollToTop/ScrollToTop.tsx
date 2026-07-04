"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

      setProgress(currentProgress);
      setIsVisible(scrollTop > 280);
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      style={
        {
          "--progress": `${progress * 3.6}deg`
        } as React.CSSProperties
      }
    >
      <span className={styles.inner}>
        <span className={styles.percent}>{progress}%</span>
        <span className={styles.arrow}>↑</span>
      </span>
    </button>
  );
}