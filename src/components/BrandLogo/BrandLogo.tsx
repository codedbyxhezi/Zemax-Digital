import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`${styles.logo} ${compact ? styles.compact : ""}`}>
      <div className={styles.wordmark}>
        <span className={styles.main}>Zemax</span>
        {!compact && (
          <span className={styles.sub}>
            Digital Studio
          </span>
        )}
      </div>
    </div>
  );
}