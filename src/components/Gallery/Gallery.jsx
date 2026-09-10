import styles from './Gallery.module.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import mock2 from '../../assets/mock (2).webp';
import mock3 from '../../assets/mock (3).webp';
import mock1 from '../../assets/mock.webp';

export default function Gallery() {
  const ref = useScrollReveal();

  return (
    <div className={`${styles.galleryCard} reveal`} ref={ref}>
      <h2 className={styles.galleryTitle}>The Vibe ✦</h2>
      <p className={styles.gallerySubtitle}>
        Real moments from Boba Drops — building, bonding, and boba-ing.
      </p>
      <div className={styles.galleryGrid}>
        <div className={`${styles.galleryItem} ${styles.galleryItemWideFirst}`}>
          <img
            src={mock2}
            alt="Makers collaborating at Boba Bash"
            loading="lazy"
          />
          <div className={styles.galleryOverlay}>
            <span>Build Together</span>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.galleryItemTall}`}>
          <img
            src={mock3}
            alt="Creator working on project at Boba Bash"
            loading="lazy"
          />
          <div className={styles.galleryOverlay}>
            <span>Create Stuff</span>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.galleryItemWideLast}`}>
          <img
            src={mock1}
            alt="Building projects at Boba Bash"
            loading="lazy"
          />
          <div className={styles.galleryOverlay}>
            <span>Make Magic</span>
          </div>
        </div>
      </div>
    </div>
  );
}
