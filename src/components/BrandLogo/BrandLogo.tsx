import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`${styles.logo} ${compact ? styles.compact : ""}`}>
      <img
        src="/images/zemax-logo-header.png"
        alt="Zemax Digital Logo"
        className={styles.logoImage}
      />
    </div>
  );
}