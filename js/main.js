// ============================================================
// KYRAJOLLY.COM — Shared JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── Nav Scroll Effect ──────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Set Active Nav Link ────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── Mobile Hamburger ───────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav  = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Fade-in Observer ───────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    fadeEls.forEach(el => observer.observe(el));
  }

  // ─── Film Year Filter ────────────────────────────────────
  const yearBtns = document.querySelectorAll('.year-btn');
  const filmEntries = document.querySelectorAll('.film-entry');

  if (yearBtns.length && filmEntries.length) {
    yearBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        yearBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const year = btn.dataset.year;
        filmEntries.forEach(entry => {
          if (year === 'all' || entry.dataset.year === year) {
            entry.style.display = 'grid';
            entry.style.opacity = '0';
            setTimeout(() => { entry.style.opacity = '1'; }, 10);
          } else {
            entry.style.display = 'none';
          }
        });
      });
    });
  }

  // ─── Topic Pill Filter (Finance page) ───────────────────
  const topicPills = document.querySelectorAll('.topic-pill');
  const postItems   = document.querySelectorAll('.post-item[data-topic]');

  if (topicPills.length && postItems.length) {
    topicPills.forEach(pill => {
      pill.addEventListener('click', () => {
        topicPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const topic = pill.dataset.topic;
        postItems.forEach(post => {
          if (topic === 'all' || post.dataset.topic === topic) {
            post.style.display = '';
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }

  // ─── Smooth scroll for anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
