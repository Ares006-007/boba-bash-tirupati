import { useCallback } from 'react';
import styles from './InfoCards.module.css';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function InfoCards() {
  const sectionRef = useScrollReveal();

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth <= 768) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `translateY(-8px) scale(1.02) perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = '';
  }, []);

  return (
    <section className={styles.infoCards} ref={sectionRef}>
      {/* When */}
      <div
        className={`${styles.infoCard} reveal reveal-delay-1`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.iconCircle} bg-yellow`}>
          <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <rect x="7" y="13" width="3" height="3" fill="#382314" />
            <rect x="14" y="13" width="3" height="3" fill="#382314" />
          </svg>
        </div>
        <div className={styles.infoText}>
          <div className={styles.infoLabel}>WHEN</div>
          <div className={styles.infoVal}>
            21 September<br />2026
          </div>
        </div>
      </div>

      {/* Where */}
      <div
        className={`${styles.infoCard} reveal reveal-delay-2`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.iconCircle} bg-green`}>
          <svg viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" fill="#382314" />
          </svg>
        </div>
        <div className={styles.infoText}>
          <div className={styles.infoLabel}>WHERE</div>
          <div className={styles.infoVal}>
            Mohan Babu<br />University
          </div>
        </div>
      </div>

      {/* City */}
      <div
        className={`${styles.infoCard} reveal reveal-delay-3`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.iconCircle} bg-blue`}>
          <svg viewBox="0 0 24 24">
            <path d="M4 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
            <path d="M12 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
            <path d="M4 21h16" />
            <rect x="7" y="11" width="2" height="2" fill="#382314" />
            <rect x="7" y="15" width="2" height="2" fill="#382314" />
            <rect x="15" y="9" width="2" height="2" fill="#382314" />
            <rect x="15" y="13" width="2" height="2" fill="#382314" />
            <rect x="15" y="17" width="2" height="2" fill="#382314" />
          </svg>
        </div>
        <div className={styles.infoText}>
          <div className={styles.infoLabel}>CITY</div>
          <div className={styles.infoVal}>
            Tirupati,<br />Andhra Pradesh
          </div>
        </div>
      </div>
    </section>
  );
}
