import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Strategy",
    text: "Wir definieren Positionierung, Zielgruppe, Stilrichtung und die klare Message deiner Marke."
  },
  {
    number: "02",
    title: "Design",
    text: "Wir gestalten ein ruhiges, hochwertiges Interface mit starker visueller Führung."
  },
  {
    number: "03",
    title: "Build",
    text: "Wir entwickeln die Website sauber, responsiv und performancestark mit moderner Technologie."
  },
  {
    number: "04",
    title: "Launch",
    text: "Wir finalisieren Details, optimieren die Nutzererfahrung und bringen deinen Auftritt live."
  }
];

export function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p>Process</p>
          <h2>Von der Idee zum hochwertigen digitalen Auftritt.</h2>
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