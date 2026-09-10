import { useEffect, useRef } from 'react';

/**
 * Custom hook that wraps IntersectionObserver to add a 'visible' class
 * when the element scrolls into view, triggering CSS reveal animations.
 *
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (default 0.15)
 * @param {string} options.rootMargin - Root margin (default '0px 0px -40px 0px')
 * @returns {React.RefObject} ref to attach to the target element
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe the element itself and any child elements that need revealing
    const revealTargets = el.querySelectorAll(
      '.reveal, .footer-line, .footer-text, .step-divider'
    );

    // If the element itself has a reveal class, observe it
    if (
      el.classList.contains('reveal') ||
      el.classList.contains('footer-line') ||
      el.classList.contains('footer-text') ||
      el.classList.contains('step-divider')
    ) {
      observer.observe(el);
    }

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
