// ------------------------------
// Smooth Scroll for Anchor Links
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    // Smooth scroll only for valid section links
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close mobile menu when a link is clicked
    const navMenu = document.getElementById("nav-menu");
    const hamburger = document.getElementById("hamburger");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// ------------------------------
// Hamburger Menu Toggle
// ------------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fade-in effect for service boxes
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".service-box");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  boxes.forEach((box) => observer.observe(box));
});

