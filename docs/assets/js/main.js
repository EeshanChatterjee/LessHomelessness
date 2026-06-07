// HomeGuarantee — Navigation & UX

document.addEventListener('DOMContentLoaded', () => {

  const current = window.location.pathname.split('/').pop() || 'index.html';

  // ── Inject sidebar ──
  const sidebarHTML = `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar__brand">
      <div class="sidebar__brand-name">Home<span>Guarantee</span></div>
      <span class="sidebar__badge">Houston Pilot</span>
    </div>
    <nav class="sidebar__nav">
      <div class="sidebar__nav-label">Overview</div>
      <a href="index.html" class="sidebar__link" data-page="index.html">
        <span class="sidebar__icon">🏠</span> Home
      </a>
      <div class="sidebar__nav-label">The Case</div>
      <a href="problem.html" class="sidebar__link" data-page="problem.html">
        <span class="sidebar__icon">⚠️</span> The Problem
      </a>
      <a href="solution.html" class="sidebar__link" data-page="solution.html">
        <span class="sidebar__icon">💡</span> Solution
      </a>
      <a href="model.html" class="sidebar__link" data-page="model.html">
        <span class="sidebar__icon">💼</span> Business Model
      </a>
      <a href="financials.html" class="sidebar__link" data-page="financials.html">
        <span class="sidebar__icon">📈</span> Financials
      </a>
      <div class="sidebar__nav-label">People & Risk</div>
      <a href="personas.html" class="sidebar__link" data-page="personas.html">
        <span class="sidebar__icon">👥</span> Stakeholders
      </a>
      <a href="risk.html" class="sidebar__link" data-page="risk.html">
        <span class="sidebar__icon">🛑</span> Risk Analysis
      </a>
      <div class="sidebar__nav-label">Take Action</div>
      <a href="invest.html" class="sidebar__link" data-page="invest.html">
        <span class="sidebar__icon">💰</span> Invest / Partner
      </a>
    </nav>
    <hr class="sidebar__divider" />
    <div class="sidebar__downloads">
      <div class="sidebar__nav-label">Downloads</div>
      <a href="assets/HomeGuarantee_PRD_v1.6.pdf" class="sidebar__dl-link" download>
        <span class="sidebar__icon">📄</span> Full PRD (PDF)
      </a>
      <a href="assets/HomeGuarantee_Financial_Projection.xlsx" class="sidebar__dl-link" download>
        <span class="sidebar__icon">📊</span> Financial Model
      </a>
    </div>
  </aside>
  <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle navigation">☰</button>
  `;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  document.body.classList.add('has-sidebar');

  // Mark active sidebar link
  document.querySelectorAll('.sidebar__link[data-page]').forEach(a => {
    if (a.dataset.page === current || (current === '' && a.dataset.page === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile toggle
  const toggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');
    toggle.textContent = sidebar.classList.contains('sidebar--open') ? '✕' : '☰';
  });
  sidebar.querySelectorAll('.sidebar__link, .sidebar__dl-link').forEach(a => {
    a.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--open');
      toggle.textContent = '☰';
    });
  });

  // ── Active top-nav link ──
  document.querySelectorAll('.navbar__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Smooth number counters on scroll ──
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      counterObs.unobserve(e.target);
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const duration = 1400;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (target * eased).toFixed(decimals);
        el.textContent = prefix + Number(value).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => counterObs.observe(el));

  // ── Fade-in on scroll ──
  const fades = document.querySelectorAll('.fade-in');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fades.forEach(el => fadeObs.observe(el));

});
