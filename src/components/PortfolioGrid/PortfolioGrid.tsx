import styles from "./PortfolioGrid.module.css";

const projects = [
  {
    title: "Maison Aurelia",
    category: "Luxury Fashion",
    description: "Editoriale Website mit ruhiger Luxus-Ästhetik und hochwertiger Produktinszenierung.",
    tag: "Brand + Web"
  },
  {
    title: "Noir Estate",
    category: "Real Estate",
    description: "Premium-Auftritt für Immobilien mit klarer Führung, Vertrauen und eleganter Präsentation.",
    tag: "Web Design"
  },
  {
    title: "Luma Clinic",
    category: "Beauty & Health",
    description: "Cleanes digitales Erlebnis für eine moderne Beauty-Marke mit Conversion-Fokus.",
    tag: "UX + Launch"
  }
];

export function PortfolioGrid() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div>
            <p>Selected Work</p>
            <h2>Projekte, die leise wirken — aber stark verkaufen.</h2>
          </div>

          <span className={styles.note}>
            Konzeptbeispiele für die visuelle Richtung von Zemax Digital.
          </span>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.title}>
              <div className={styles.visual}>
                <span className={styles.index}>0{index + 1}</span>
                <span className={styles.tag}>{project.tag}</span>

                <div className={styles.mockup}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className={styles.content}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}