import { stats } from "@/lib/content";
import styles from "./StatsBar.module.css";

export function StatsBar() {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <div className={styles.item} key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
