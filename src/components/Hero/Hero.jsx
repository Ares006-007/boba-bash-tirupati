import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import bobaCupIcon from '../../assets/boba cup.png';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const hero = heroRef.current;
    if (!hero) return;

    // ─── Soft bubble particles ───
    const bubbleInterval = setInterval(() => {
      const bubble = document.createElement('div');
      bubble.className = styles.bubble;
      bubble.setAttribute('aria-hidden', 'true');

      const size = 6 + Math.random() * 16;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.bottom = Math.random() * 30 + '%';

      const duration = 3 + Math.random() * 4;
      bubble.style.animationDuration = duration + 's';

      hero.appendChild(bubble);

      setTimeout(() => bubble.remove(), duration * 1000);
    }, 1200);

    // ─── Subtle parallax ───
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroRect = hero.getBoundingClientRect();

          if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
            const offset = scrolled * 0.15;
            hero.style.backgroundPositionY = offset + 'px';
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(bubbleInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.hero} id="heroSection" ref={heroRef}>
      <div className={styles.heroTextArea}>
        <div className={styles.pillBadge}>
          <img src={bobaCupIcon} alt="icon" className={styles.badgeIcon} />
          <span>THE BOBA BASH IS COMING</span>
        </div>
        <h1 className={styles.heroTitle}>
          <div className={styles.titleBoba}>Boba</div>
          <div className={styles.titleBash}>Bash</div>
          <div className={styles.titleTirupati}>TIRUPATI</div>
        </h1>
        <p className={styles.heroDesc}>
          Get ready for a day packed with boba,<br />
          people, creativity and unforgettable moments.<br />
          Tirupati, we&rsquo;re bringing the Boba Bash to you!
        </p>
      </div>
    </section>
  );
}
