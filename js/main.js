/* ============================================================
   ATTELJE — Main JS
   Smooth scroll · Showreel modal · Sticky nav
   ============================================================ */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // NAV — highlight active link based on current page
  // ----------------------------------------------------------
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // ----------------------------------------------------------
  // SHOWREEL MODAL
  // ----------------------------------------------------------
  const modal        = document.getElementById('showreel-modal');
  const trigger      = document.getElementById('showreel-trigger');
  const closeBtn     = document.getElementById('modal-close');
  const showreelVideo = document.getElementById('showreel-video');

  if (trigger && modal && showreelVideo) {

    trigger.addEventListener('click', () => {
      modal.classList.add('is-open');
      showreelVideo.play();
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      modal.classList.remove('is-open');
      showreelVideo.pause();
      showreelVideo.currentTime = 0;
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Click outside inner box to close
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // ----------------------------------------------------------
  // SMOOTH SCROLL — anchor links
  // ----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
