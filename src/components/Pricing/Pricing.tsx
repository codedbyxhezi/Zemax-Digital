import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Pricing.module.css";

const packages = [
  {
    number: "01",
    name: "Starter",
    price: "1.490 €",
    note: "einmalig, zzgl. MwSt.",
    description:
      "Für Selbstständige und kleine Unternehmen, die professionell online starten möchten.",
    features: [
      "Individuelle Onepage",
      "Responsive Umsetzung",
      "Kontaktformular",
      "SEO-Grundlage",
      "Performance-Optimierung"
    ],
    href: "/kontakt?paket=starter"
  },
  {
    number: "02",
    name: "Business",
    price: "2.990 €",
    note: "einmalig, zzgl. MwSt.",
    description:
      "Für Unternehmen, die einen vollständigen und hochwertigen digitalen Auftritt benötigen.",
    features: [
      "Individuelles UI- und UX-Design",
      "Bis zu 7 Unterseiten",
      "Next.js und TypeScript",
      "Animationen und Interaktionen",
      "Erweiterte SEO-Grundlage",
      "Einweisung nach dem Launch"
    ],
    href: "/kontakt?paket=business",
    featured: true
  },
  {
    number: "03",
    name: "Premium",
    price: "ab 4.990 €",
    note: "individuelles Angebot",
    description:
      "Für Marken mit besonderen Anforderungen, individuellen Funktionen und langfristigen Zielen.",
    features: [
      "Individuelles Gesamtkonzept",
      "Umfangreiche Seitenstruktur",
      "Premium UI- und UX-Design",
      "CMS- oder API-Integration",
      "Technisches SEO",
      "Priorisierte Betreuung"
    ],
    href: "/kontakt?paket=premium"
  }
];

export function Pricing() {
  return (
    <section className={styles.pricing} id="preise">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Pakete & Preise</span>

            <h2>
              Eine klare Basis.
              <span>Passend zu deinem Projekt.</span>
            </h2>
          </div>

          <p>
            Transparente Richtwerte für unterschiedliche Anforderungen. Der
            endgültige Preis richtet sich nach Umfang, Inhalten und Funktionen.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {packages.map((item, index) => (
            <Reveal
              key={item.name}
              className={`${styles.card} ${
                item.featured ? styles.featured : ""
              }`}
              delay={index * 80}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{item.number}</span>

                {item.featured && (
                  <span className={styles.recommended}>Empfohlen</span>
                )}
              </div>

              <div className={styles.title}>
                <h3>{item.name}</h3>
                <span aria-hidden="true">↗</span>
              </div>

              <p className={styles.description}>{item.description}</p>

              <div className={styles.price}>
                <strong>{item.price}</strong>
                <span>{item.note}</span>
              </div>

              <ul className={styles.features}>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <Link href={item.href} className={styles.button}>
                Paket anfragen
                <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.bottom} delay={280}>
          <div>
            <span>Individuelles Projekt</span>
            <p>
              Kein Paket passt genau zu deinen Anforderungen? Dann erstellen
              wir ein individuelles Angebot.
            </p>
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