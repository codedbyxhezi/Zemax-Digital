import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    text: "Logo-System, Farben, Typografie und ein visueller Auftritt, der sofort hochwertig wirkt.",
    label: "Identity"
  },
  {
    number: "02",
    title: "Web Design",
    text: "Elegante Layouts, starke Nutzerführung und ein digitaler Auftritt mit Premium-Charakter.",
    label: "Interface"
  },
  {
    number: "03",
    title: "Next.js Build",
    text: "Saubere Entwicklung mit TypeScript, responsiver Struktur und schneller Performance.",
    label: "Development"
  },
  {
    number: "04",
    title: "Digital Experience",
    text: "Feine Animationen, klare Conversion-Führung und ein Erlebnis, das Vertrauen schafft.",
    label: "Motion"
  }
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.backgroundWord}>Services</div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p>Services</p>
          <h2>Digitale Auftritte mit mehr Präsenz, Tiefe und Wirkung.</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              className={`${styles.card} ${index === 1 ? styles.featured : ""}`}
              key={service.title}
            >
              <div className={styles.top}>
                <span>{service.number}</span>
                <small>{service.label}</small>
              </div>

              <div className={styles.icon}>
                <i />
                <i />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}