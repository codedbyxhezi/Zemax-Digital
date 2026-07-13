import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz | Zemax Digital",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei Zemax Digital."
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.kicker}>Rechtliche Informationen</p>
            <h1>Datenschutz</h1>
            <p className={styles.intro}>
              Informationen über die Verarbeitung personenbezogener Daten beim
              Besuch dieser Website.
            </p>
          </div>
        </header>

        <article className={`container ${styles.article}`}>
          <div className={styles.notice}>
            <strong>Stand: 13. Juli 2026</strong>
            <p>
              Diese Datenschutzerklärung gilt für die Website von Zemax
              Digital. Sie geht davon aus, dass keine zusätzlichen
              Analyse-, Marketing- oder Trackingdienste aktiviert sind.
            </p>
          </div>

          <section className={styles.block}>
            <h2>1. Verantwortlicher</h2>

            <div className={styles.content}>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung:
              </p>

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

              <p>
                E-Mail:{" "}
                <a href="mailto:hello@zemax.digital">
                  hello@zemax.digital
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+490000000000">[TELEFONNUMMER]</a>
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>2. Allgemeine Hinweise</h2>

            <div className={styles.content}>
              <p>
                Personenbezogene Daten sind Informationen, durch die eine
                natürliche Person unmittelbar oder mittelbar identifiziert
                werden kann. Dazu gehören beispielsweise Namen,
                E-Mail-Adressen, IP-Adressen oder technische Nutzungsdaten.
              </p>

              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies für
                die Bereitstellung dieser Website, die Kommunikation mit
                Interessenten oder die Erfüllung gesetzlicher Pflichten
                erforderlich ist.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>3. Hosting über Vercel</h2>

            <div className={styles.content}>
              <p>
                Diese Website wird über folgenden Hosting- und
                Bereitstellungsdienst veröffentlicht:
              </p>

              <p>
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                USA
              </p>

              <p>
                Beim Aufruf der Website können durch Vercel insbesondere
                folgende Daten verarbeitet werden:
              </p>

              <ul>
                <li>IP-Adresse und daraus abgeleitete ungefähre Region</li>
                <li>Datum und Uhrzeit des Aufrufs</li>
                <li>aufgerufene Seiten und Dateien</li>
                <li>Referrer-URL</li>
                <li>Browsertyp, Betriebssystem und Geräteinformationen</li>
                <li>technische Diagnose-, Sicherheits- und Protokolldaten</li>
              </ul>

              <p>
                Die Verarbeitung erfolgt zur sicheren, stabilen und
                performanten Bereitstellung der Website. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt
                im sicheren und zuverlässigen Betrieb unseres Internetauftritts.
              </p>

              <p>
                Eine Verarbeitung oder Übermittlung von Daten in die USA kann
                nicht ausgeschlossen werden. Vercel gibt an, unter dem
                EU-US Data Privacy Framework zertifiziert zu sein und für
                bestimmte Übermittlungen zusätzlich die
                EU-Standardvertragsklauseln zu verwenden.
              </p>

              <p>
                Weitere Informationen findest du in der{" "}
                <a
                  href="https://vercel.com/legal/privacy-notice"
                  target="_blank"
                  rel="noreferrer"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>4. Kontaktaufnahme per E-Mail</h2>

            <div className={styles.content}>
              <p>
                Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von
                dir übermittelten Daten, insbesondere deine E-Mail-Adresse,
                deinen Namen und den Inhalt deiner Nachricht.
              </p>

              <p>
                Erfolgt die Kontaktaufnahme zur Anbahnung oder Durchführung
                eines Vertrages, ist Art. 6 Abs. 1 lit. b DSGVO die
                Rechtsgrundlage. Bei allgemeinen Anfragen erfolgt die
                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Unser berechtigtes Interesse liegt in der Bearbeitung und
                Beantwortung deiner Anfrage.
              </p>

              <p>
                Der Kontaktbereich dieser Website verwendet einen
                E-Mail-Link. Beim Anklicken wird dein lokal eingerichtetes
                E-Mail-Programm geöffnet. Die Nachricht wird nicht über ein
                eigenes Kontaktformular oder einen eigenen Formularserver
                dieser Website übertragen.
              </p>
            </div>
          </section>

          {/* 
            Dieser Abschnitt ist nur korrekt, solange keine Dienste wie
            Vercel Analytics, Speed Insights, Google Analytics, Meta Pixel,
            Hotjar, eingebettete YouTube-Videos, Karten, externe Schriftarten
            oder andere Tracking-/Drittanbieter-Dienste aktiviert sind.
          */}
          <section className={styles.block}>
            <h2>5. Cookies und Tracking</h2>

            <div className={styles.content}>
              <p>
                Auf dieser Website werden derzeit keine eigenen
                Analyse- oder Marketingdienste eingesetzt. Es werden von uns
                keine nicht erforderlichen Tracking-Cookies gesetzt.
              </p>

              <p>
                Sollte die Website zukünftig um Analyse-, Marketing-,
                Karten-, Video- oder vergleichbare Drittanbieterdienste
                erweitert werden, wird diese Datenschutzerklärung entsprechend
                angepasst und, soweit erforderlich, eine vorherige Einwilligung
                eingeholt.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>6. Externe Links und soziale Netzwerke</h2>

            <div className={styles.content}>
              <p>
                Diese Website enthält einfache Links zu externen Websites und
                sozialen Netzwerken, beispielsweise GitHub, LinkedIn und
                Instagram.
              </p>

              <p>
                Beim bloßen Besuch unserer Website werden über diese Links
                keine Daten automatisch an die jeweiligen Anbieter übertragen.
                Erst wenn du einen externen Link anklickst, verlässt du unsere
                Website. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen
                des jeweiligen Anbieters.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>7. Speicherdauer</h2>

            <div className={styles.content}>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies
                für den jeweiligen Zweck erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>

              <p>
                Daten aus allgemeinen Anfragen werden gelöscht, sobald die
                Anfrage abschließend bearbeitet wurde und keine gesetzlichen,
                vertraglichen oder berechtigten Gründe für eine weitere
                Speicherung bestehen.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>8. Rechtsgrundlagen</h2>

            <div className={styles.content}>
              <p>
                Je nach Verarbeitung stützen wir uns insbesondere auf folgende
                Rechtsgrundlagen:
              </p>

              <ul>
                <li>
                  Art. 6 Abs. 1 lit. a DSGVO – Einwilligung
                </li>
                <li>
                  Art. 6 Abs. 1 lit. b DSGVO – Vertrag oder vorvertragliche
                  Maßnahmen
                </li>
                <li>
                  Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtung
                </li>
                <li>
                  Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.block}>
            <h2>9. Deine Datenschutzrechte</h2>

            <div className={styles.content}>
              <p>
                Du hast im Rahmen der gesetzlichen Voraussetzungen
                insbesondere folgende Rechte:
              </p>

              <ul>
                <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO
                </li>
                <li>
                  Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO
                </li>
                <li>Widerspruchsrecht gemäß Art. 21 DSGVO</li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
                  für die Zukunft
                </li>
              </ul>

              <p>
                Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
                <a href="mailto:hello@zemax.digital">
                  hello@zemax.digital
                </a>
                .
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>10. Beschwerderecht</h2>

            <div className={styles.content}>
              <p>
                Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde
                über die Verarbeitung deiner personenbezogenen Daten zu
                beschweren.
              </p>

              <p>
                Zuständig ist insbesondere die Datenschutzaufsichtsbehörde des
                Bundeslandes, in dem du deinen gewöhnlichen Aufenthalt, deinen
                Arbeitsplatz oder den Ort des mutmaßlichen Verstoßes hast.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>11. Verschlüsselung</h2>

            <div className={styles.content}>
              <p>
                Diese Website verwendet eine verschlüsselte
                HTTPS-Verbindung. Dadurch werden Daten, die zwischen deinem
                Browser und der Website übertragen werden, vor dem einfachen
                Mitlesen durch Dritte geschützt.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>12. Änderungen dieser Erklärung</h2>

            <div className={styles.content}>
              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich
                technische Funktionen, eingesetzte Dienste oder gesetzliche
                Anforderungen ändern. Es gilt die jeweils auf dieser Website
                veröffentlichte Fassung.
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