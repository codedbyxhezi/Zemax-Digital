import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Strategy",
    text: "Positionierung, Zielgruppe, Stilrichtung und Message werden klar definiert."
  },
  {
    number: "02",
    title: "Design",
    text: "Wir gestalten ein hochwertiges Interface mit ruhiger, eleganter Führung."
  },
  {
    number: "03",
    title: "Build",
    text: "Die Website wird sauber, responsiv und performancestark entwickelt."
  },
  {
    number: "04",
    title: "Launch",
    text: "Feinschliff, Optimierung und finaler Launch für deinen digitalen Auftritt."
  }
];

export function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={`container ${styles.inner}`}>
        <div className={styles.panel}>
          <p>Process</p>
          <h2>Ein klarer Ablauf. Mehr Sicherheit. Besseres Ergebnis.</h2>
          <span>From idea to premium launch</span>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article className={styles.step} key={step.title}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}