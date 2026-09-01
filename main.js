/* ==========================================================
   BOBA BASH TIRUPATI — Minimal Interaction Script
   - IntersectionObserver entrance animations
   - Respects prefers-reduced-motion
   ========================================================== */

(function () {
  'use strict';

  // Skip all animation logic if user prefers reduced motion
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Immediately show all reveal elements
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  // Entrance animations via IntersectionObserver
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
