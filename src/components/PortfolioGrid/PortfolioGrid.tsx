import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./PortfolioGrid.module.css";

const projects = [
  {
    number: "01",
    title: "Haartraum Friseur",
    category: "Beauty & Hair Salon",
    description:
      "Dunkle, elegante Salon-Website mit warmer Goldästhetik, klarer Leistungsübersicht und direkter Terminführung für potenzielle Kunden.",
    image: "/images/projects/haartraum-friseur.png",
    alt: "Haartraum Friseur Website mit dunklem Premium Design",
    technologies: ["Next.js", "CSS Modules", "Responsive"],
    liveUrl: "https://haartraum-friseur.vercel.app"
  },
  {
    number: "02",
    title: "Invento Furniture",
    category: "Furniture & Interior Design",
    description:
      "Eleganter Webauftritt für maßgefertigte Küchen und moderne Innenräume. Helle Bildsprache, großzügige Typografie und ein hochwertiger Premium-Look.",
    image: "/images/projects/invento-furniture.png",
    alt: "Invento Furniture Website für moderne Küchen",
    technologies: ["Next.js", "TypeScript", "UI Design"],
    liveUrl: "https://invento-furniture.vercel.app"
  },
  {
    number: "03",
    title: "ALUROL",
    category: "Construction & Shading Systems",
    description:
      "Mehrsprachige Unternehmenswebsite für Rollläden, Jalousien und moderne Beschattungssysteme. Mit klarer Produktführung, starkem Hero-Bereich und responsiver Umsetzung.",
    image: "/images/projects/alurol.png",
    alt: "ALUROL Website für Rollläden und Beschattungssysteme",
    technologies: ["Next.js", "TypeScript", "Responsive"],
    liveUrl: "https://alurol.vercel.app/sq"
  }
];

export function PortfolioGrid() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.backgroundWord}>Projects</div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <div>
            <p>Selected Projects</p>

            <h2>
              Echte Projekte. Individuell gestaltet und entwickelt.
            </h2>
          </div>

          <span>
            Eine Auswahl meiner bisherigen Webprojekte aus unterschiedlichen
            Branchen.
          </span>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal
              className={`${styles.project} ${
                index === 0 ? styles.featured : ""
              }`}
              delay={index * 100}
              key={project.title}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLink}
                aria-label={`${project.title} live ansehen`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 900px) 100vw, 66vw"
                        : "(max-width: 900px) 100vw, 50vw"
                    }
                    className={styles.image}
                    priority={index === 0}
                  />

                  <div className={styles.overlay} />

                  <div className={styles.imageTop}>
                    <span>{project.number}</span>
                    <small>Live Project</small>
                  </div>

                  <div className={styles.openIcon} aria-hidden="true">
                    ↗
                  </div>
                </div>
              </a>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{project.category}</span>
                  <small>{project.number} / 03</small>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.bottom}>
                  <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.liveButton}
                  >
                    Website ansehen
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}