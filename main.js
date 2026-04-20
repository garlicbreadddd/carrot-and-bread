/* ============================================
   BREADNCARROT — main.js
   Scroll reveal + decoration helpers
   ============================================ */

// ── Scroll Reveal ──────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // once revealed, no need to keep observing
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});

// ── Floating Decorations ───────────────────
// Randomly offset animation delays so decorations feel organic
document.querySelectorAll('.deco').forEach(el => {
  const delay = (Math.random() * 3).toFixed(2);
  const duration = (4 + Math.random() * 4).toFixed(2);
  el.style.animationDelay    = `${delay}s`;
  el.style.animationDuration = `${duration}s`;
});

// ── Polaroid tilt on load ──────────────────
// Re-randomise tilts slightly each page load for variety
document.querySelectorAll('.activity-card').forEach(card => {
  const base = parseFloat(getComputedStyle(card).getPropertyValue('--tilt')) || 0;
  const jitter = (Math.random() * 1 - 0.5).toFixed(2);
  card.style.setProperty('--tilt', `${(base + parseFloat(jitter)).toFixed(2)}deg`);
});

// ── Page transition fade ───────────────────
// Fade out when navigating away
document.querySelectorAll('a').forEach(link => {
  // only internal links
  if (link.hostname !== window.location.hostname) return;
  if (link.classList.contains('no-transition')) return;

  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    e.preventDefault();
    document.body.style.transition = 'opacity 0.35s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 350);
  });
});

// Fade in on arrival
window.addEventListener('pageshow', () => {
  document.body.style.transition = 'opacity 0.4s ease';
  document.body.style.opacity = '1';
});
document.body.style.opacity = '0';
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});s