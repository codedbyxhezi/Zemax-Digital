"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const variants = ["fadeUp", "slideLeft", "slideRight", "zoomIn", "blurUp"] as const;

type Variant = (typeof variants)[number];

function getStableVariant(delay: number): Variant {
  const index = Math.abs(Math.round(delay / 90)) % variants.length;
  return variants[index];
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const variant = getStableVariant(delay);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} ${styles.reveal} ${styles[variant]} ${
        isVisible ? styles.visible : ""
      }`}
      style={
        {
          "--reveal-delay": `${delay}ms`
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}