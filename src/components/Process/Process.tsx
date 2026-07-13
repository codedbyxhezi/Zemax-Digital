import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    label: "Verstehen",
    text: "Wir analysieren deine Marke, Zielgruppe, Konkurrenz und das Ziel der Website. Bevor gestaltet wird, muss klar sein, was der digitale Auftritt leisten soll.",
    result: "Positionierung · Zielgruppe · Richtung"
  },
  {
    number: "02",
    title: "Direction",
    label: "Definieren",
    text: "Wir entwickeln die visuelle Richtung, Seitenstruktur und Nutzerführung. Typografie, Farben und Bildsprache werden zu einem klaren System verbunden.",
    result: "Konzept · Wireframe · Art Direction"
  },
  {
    number: "03",
    title: "Design & Build",
    label: "Erschaffen",
    text: "Das Interface wird gestaltet und direkt hochwertig umgesetzt. Responsive, performant und ohne unnötige technische Kompromisse.",
    result: "UI Design · Next.js · Responsive"
  },
  {
    number: "04",
    title: "Launch",
    label: "Veröffentlichen",
    text: "Nach Tests, Feinschliff und Optimierung geht die Website live. Du erhältst einen stabilen Auftritt, der professionell wirkt und langfristig funktioniert.",
    result: "Testing · Optimierung · Übergabe"
  }
];

export function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.watermark}>Process</div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.intro}>
          <div className={styles.introLabel}>
            <span>04 Schritte</span>
            <small>Von der Idee bis zum Launch</small>
          </div>

          <h2>
            Kein Chaos.
            <span>Ein klarer Prozess.</span>
          </h2>

          <p>
            Strategie, Design und Entwicklung greifen ineinander. Jeder Schritt
            hat ein klares Ziel und führt zum nächsten.
          </p>
        </Reveal>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <Reveal
              className={styles.step}
              delay={index * 90}
              key={step.number}
            >
              <div className={styles.number}>
                <span>{step.number}</span>
              </div>

              <div className={styles.title}>
                <small>{step.label}</small>
                <h3>{step.title}</h3>
              </div>

              <div className={styles.description}>
                <p>{step.text}</p>
              </div>

              <div className={styles.result}>
                <span>Output</span>
                <strong>{step.result}</strong>
              </div>

              <div className={styles.arrow}>↘</div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.outro}>
          <span>Bereit für den ersten Schritt?</span>

          <a href="/#contact">
            Projekt starten
            <i>→</i>
          </a>
        </Reveal>
      </div>
    </section>
  );
}