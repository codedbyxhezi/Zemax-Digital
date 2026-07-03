import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    text: "Ein klarer visueller Auftritt mit Logo-System, Farben, Typografie und Premium-Markenwirkung."
  },
  {
    number: "02",
    title: "Web Design",
    text: "Elegante Layouts, starke Nutzerführung und ein hochwertiger erster Eindruck für deine Marke."
  },
  {
    number: "03",
    title: "Next.js Development",
    text: "Saubere Umsetzung mit TypeScript, performanter Struktur und responsivem Frontend."
  },
  {
    number: "04",
    title: "Digital Experience",
    text: "Dezente Animationen, Conversion-Fokus und ein Auftritt, der professionell Vertrauen aufbaut."
  }
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p>Services</p>
          <h2>Alles, was eine Premium-Marke digital braucht.</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <span className={styles.number}>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}