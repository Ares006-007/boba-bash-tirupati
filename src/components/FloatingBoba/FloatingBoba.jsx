import { useEffect, useRef } from 'react';
import styles from './FloatingBoba.module.css';
import bobaCup from '../../assets/boba cup.png';

export default function FloatingBoba() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const maxCups = 6;
    let activeCups = 0;
    let intervalId;

    function spawnFloatingCup() {
      if (activeCups >= maxCups) return;

      const cup = document.createElement('img');
      cup.src = bobaCup;
      cup.className = styles.floatingCup;
      cup.alt = '';
      cup.setAttribute('aria-hidden', 'true');

      cup.style.left = Math.random() * 90 + 5 + '%';

      const size = 25 + Math.random() * 30;
      cup.style.width = size + 'px';

      const duration = 12 + Math.random() * 18;
      cup.style.animationDuration = duration + 's';

      cup.style.animationDelay = Math.random() * 2 + 's';

      container.appendChild(cup);
      activeCups++;

      cup.addEventListener('animationend', () => {
        cup.remove();
        activeCups--;
      });
    }

    // Initial burst
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnFloatingCup(), i * 800);
    }

    // Spawn periodically
    intervalId = setInterval(spawnFloatingCup, 4000);

    return () => {
      clearInterval(intervalId);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div
      className={styles.floatingBobaContainer}
      ref={containerRef}
      aria-hidden="true"
    />
  );
}
