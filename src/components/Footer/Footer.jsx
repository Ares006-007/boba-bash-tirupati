import styles from './Footer.module.css';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer className={styles.footer} ref={ref}>
      <div className={styles.eventBar}>
        <div className={`${styles.footerLine} footer-line`} />
        <div className={`${styles.footerText} footer-text`}>
          <span className={styles.star}>✦ ✦</span>
          BOBA BASH TIRUPATI &bull; 21 SEPT 2026
          <span className={`${styles.star} ${styles.starLast}`}>✦ ✦</span>
        </div>
        <div className={`${styles.footerLine} footer-line`} />
      </div>

      <div className={`${styles.watermarkContainer} footer-text`}>
        <div className={styles.watermark}>
          <span className={styles.sparkle} aria-hidden="true">✦</span>
          <span className={styles.watermarkText}>
            made with love by <span className={styles.author}>ajaz</span>
          </span>
          <span className={styles.heart} aria-hidden="true">❤</span>
        </div>
      </div>
    </footer>
  );
}

