import Image from "next/image";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div
      className={`${styles.logo} ${
        compact ? styles.compact : ""
      }`}
    >
      <Image
        src="/images/zemax-logo-header.png"
        alt="Zemax Digital Logo"
        width={80}
        height={80}
        sizes={compact ? "52px" : "80px"}
        quality={75}
        className={styles.logoImage}
      />
    </div>
  );
}