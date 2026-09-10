import styles from './Header.module.css';
import bobaCupIcon from '../../assets/boba cup.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoBoba}>boba</span>{' '}
        <span className={styles.logoBash}>bash</span>
        <img
          src={bobaCupIcon}
          alt="boba cup icon"
          className={styles.logoIcon}
        />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.badgeYellow}>TIRUPATI &bull; 2026</div>
      </div>
    </header>
  );
}
