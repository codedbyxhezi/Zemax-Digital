import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    text: "Logo-System, Farben, Typografie und ein visueller Auftritt, der sofort hochwertig wirkt.",
    label: "Identity",
    image: "/images/services/service-brand-identity.png",
    alt: "Abstrakter goldener Kompass für Brand Identity"
  },
  {
    number: "02",
    title: "Web Design",
    text: "Elegante Layouts, starke Nutzerführung und ein digitaler Auftritt mit Premium-Charakter.",
    label: "Interface",
    image: "/images/services/service-web-design.png",
    alt: "Dunkles Premium User Interface für Web Design"
  },
  {
    number: "03",
    title: "Next.js Build",
    text: "Saubere Entwicklung mit TypeScript, responsiver Struktur und schneller Performance.",
    label: "Development",
    image: "/images/services/service-nextjs-build.png",
    alt: "Futuristische Technologiearchitektur für Next.js Development"
  },
  {
    number: "04",
    title: "Digital Experience",
    text: "Feine Animationen, klare Conversion-Führung und ein Erlebnis, das Vertrauen schafft.",
    label: "Motion",
    image: "/images/services/service-digital-experience.png",
    alt: "Goldene Wachstumsvisualisierung für Digital Experience"
  }
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.backgroundWord}>Services</div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <p>Services</p>
          <h2>Digitale Auftritte mit mehr Präsenz, Tiefe und Wirkung.</h2>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              className={`${styles.card} ${
                index === 1 ? styles.featured : ""
              }`}
              delay={index * 90}
              key={service.title}
            >
              <div className={styles.top}>
                <span>{service.number}</span>
                <small>{service.label}</small>
              </div>

              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 25vw"
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}