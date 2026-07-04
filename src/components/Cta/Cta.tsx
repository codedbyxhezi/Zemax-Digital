"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Cta.module.css";

const projectTypes = [
  "Branding",
  "Website",
  "Portfolio",
  "Web App",
  "Kompletter Auftritt"
];

export function Cta() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const projectType = String(formData.get("projectType") || "");
    const budget = String(formData.get("budget") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Neue Projektanfrage von ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Projektart: ${projectType}
Budget: ${budget}

Nachricht:
${message}`
    );

    window.location.href = `mailto:hello@zemax.digital?subject=${subject}&body=${body}`;

    setIsSent(true);
    event.currentTarget.reset();
  };

  return (
    <section className={styles.cta} id="contact">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.panel}>
          <div className={styles.content}>
            <p className={styles.kicker}>Projekt starten</p>

            <h2>Bereit für einen hochwertigen digitalen Auftritt?</h2>

            <p className={styles.text}>
              Sende uns kurz deine Idee. Wir melden uns mit einer klaren
              Einschätzung, wie dein Branding oder deine Website hochwertiger
              und professioneller wirken kann.
            </p>

            <div className={styles.quickInfo}>
              <div>
                <span>Antwort</span>
                <strong>Innerhalb von 24h</strong>
              </div>

              <div>
                <span>Fokus</span>
                <strong>Branding · Web · Launch</strong>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <span>Zemax Digital</span>
              <p>Kontaktformular</p>
            </div>

            <div className={styles.row}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Dein Name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="deine@email.de"
                  required
                />
              </label>
            </div>

            <label>
              Projektart
              <select name="projectType" required defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>

                {projectTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Budget
              <select name="budget" required defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>
                <option value="Unter 1.000 €">Unter 1.000 €</option>
                <option value="1.000 € – 2.500 €">1.000 € – 2.500 €</option>
                <option value="2.500 € – 5.000 €">2.500 € – 5.000 €</option>
                <option value="5.000 €+">5.000 €+</option>
              </select>
            </label>

            <label>
              Nachricht
              <textarea
                name="message"
                placeholder="Erzähl kurz, was du brauchst..."
                rows={5}
                required
              />
            </label>

            <button type="submit">Anfrage senden</button>

            {isSent && (
              <p className={styles.success}>
                Dein Email-Programm wurde geöffnet. Bitte sende die Nachricht
                dort ab.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}