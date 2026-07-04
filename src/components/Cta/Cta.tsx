import styles from "./Cta.module.css";

const contactDetails = [
  {
    label: "Email",
    value: "hello@zemax.digital",
    href: "mailto:hello@zemax.digital"
  },
  {
    label: "Response",
    value: "Innerhalb von 24h",
    href: "#contact"
  },
  {
    label: "Focus",
    value: "Branding · Web · Launch",
    href: "#services"
  }
];

export function Cta() {
  return (
    <section className={styles.cta} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.panel}>
          <div className={styles.content}>
            <p className={styles.kicker}>Start a Project</p>

            <h2>
              Bereit für einen Auftritt, der hochwertiger wirkt?
            </h2>

            <p className={styles.text}>
              Erzähle uns kurz von deiner Marke. Wir entwickeln daraus einen
              klaren, eleganten und performanten digitalen Auftritt.
            </p>

            <div className={styles.actions}>
              <a className={styles.primary} href="mailto:hello@zemax.digital">
                Projekt anfragen
              </a>

              <a className={styles.secondary} href="#portfolio">
                Arbeiten ansehen
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.cardLabel}>Zemax Digital</span>

            <div className={styles.cardTitle}>
              <strong>Luxury Digital Studio</strong>
              <p>Brand Identity · Web Design · Next.js Development</p>
            </div>

            <div className={styles.details}>
              {contactDetails.map((item) => (
                <a href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}