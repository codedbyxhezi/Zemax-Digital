import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum | Zemax Digital",
  description:
    "Impressum und Anbieterkennzeichnung von Zemax Digital."
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.kicker}>Rechtliche Informationen</p>
            <h1>Impressum</h1>
            <p className={styles.intro}>
              Angaben zum Anbieter und zur verantwortlichen Person hinter
              Zemax Digital.
            </p>
          </div>
        </header>

        <article className={`container ${styles.article}`}>
          <section className={styles.block}>
            <h2>Angaben gemäß § 5 DDG</h2>

            <div className={styles.content}>
              <p>
                <strong>Zemax Digital</strong>
                <br />
                Inhaber: [VOR- UND NACHNAME]
              </p>

              <address>
                [STRASSE UND HAUSNUMMER]
                <br />
                [POSTLEITZAHL UND ORT]
                <br />
                Deutschland
              </address>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Kontakt</h2>

            <div className={styles.content}>
              <p>
                Telefon:{" "}
                <a href="tel:+490000000000">[TELEFONNUMMER]</a>
                <br />
                E-Mail:{" "}
                <a href="mailto:hello@zemax.digital">
                  hello@zemax.digital
                </a>
              </p>
            </div>
          </section>

          {/*
            Diesen Abschnitt nur einblenden, wenn eine Umsatzsteuer-ID
            vorhanden ist.

          <section className={styles.block}>
            <h2>Umsatzsteuer-ID</h2>

            <div className={styles.content}>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
              </p>

              <p>[UMSATZSTEUER-ID]</p>
            </div>
          </section>
          */}

          {/*
            Diesen Abschnitt nur einblenden, wenn ein Handels-, Vereins-,
            Partnerschafts- oder Genossenschaftsregistereintrag existiert.

          <section className={styles.block}>
            <h2>Registereintrag</h2>

            <div className={styles.content}>
              <p>
                Registergericht: [REGISTERGERICHT]
                <br />
                Registernummer: [REGISTERNUMMER]
              </p>
            </div>
          </section>
          */}

          <section className={styles.block}>
            <h2>Verantwortlich für redaktionelle Inhalte</h2>

            <div className={styles.content}>
              <p>Verantwortlich gemäß § 18 Abs. 2 MStV:</p>

              <address>
                [VOR- UND NACHNAME]
                <br />
                [STRASSE UND HAUSNUMMER]
                <br />
                [POSTLEITZAHL UND ORT]
                <br />
                Deutschland
              </address>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Verbraucherstreitbeilegung</h2>

            <div className={styles.content}>
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>Haftung für externe Links</h2>

            <div className={styles.content}>
              <p>
                Diese Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber verantwortlich.
              </p>

              <p>
                Bei Bekanntwerden konkreter Rechtsverletzungen werden
                entsprechende Links geprüft und, soweit erforderlich,
                entfernt.
              </p>
            </div>
          </section>

          <div className={styles.pageEnd}>
            <a href="/#top">Zurück zur Startseite</a>
          </div>
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}