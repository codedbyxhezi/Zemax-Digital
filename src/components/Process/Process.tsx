import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    label: "Discovery",
    title: "Verstehen",
    text: "Wir klären Ziele, Zielgruppe, Anforderungen und die gewünschte Wirkung deines digitalen Auftritts.",
    result: "Strategie · Positionierung · Ziele"
  },
  {
    number: "02",
    label: "Direction",
    title: "Definieren",
    text: "Seitenstruktur, Nutzerführung und visuelle Richtung werden zu einem klaren Gesamtkonzept verbunden.",
    result: "Struktur · Wireframes · Art Direction"
  },
  {
    number: "03",
    label: "Design & Build",
    title: "Erschaffen",
    text: "Das Interface wird individuell gestaltet und anschließend responsiv, schnell und sauber entwickelt.",
    result: "UI Design · Next.js · Responsive"
  },
  {
    number: "04",
    label: "Launch",
    title: "Veröffentlichen",
    text: "Nach Tests und Feinschliff geht die Website live und wird für eine zuverlässige Nutzung vorbereitet.",
    result: "Testing · Optimierung · Übergabe"
  }
];

export function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Unser Prozess</span>

            <h2>
              Von der Idee
              <span>zum Launch.</span>
            </h2>
          </div>

          <div className={styles.headerContent}>
            <p>
              Ein klarer Ablauf sorgt für bessere Entscheidungen, weniger
              Umwege und ein Ergebnis, das langfristig funktioniert.
            </p>

            <span className={styles.stepCount}>04 klare Schritte</span>
          </div>
        </Reveal>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              className={styles.step}
              delay={index * 80}
            >
              <div className={styles.stepNumber}>
                <span>{step.number}</span>
                <i aria-hidden="true" />
              </div>

              <div className={styles.stepTitle}>
                <small>{step.label}</small>
                <h3>{step.title}</h3>
              </div>

              <p className={styles.description}>{step.text}</p>

              <div className={styles.output}>
                <span>Ergebnis</span>
                <strong>{step.result}</strong>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                ↘
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.bottom} delay={300}>
          <div>
            <span>Nächster Schritt</span>
            <p>Erzähl uns kurz von deinem geplanten Projekt.</p>
          </div>

          <Link href="/kontakt">
            Projekt besprechen
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}