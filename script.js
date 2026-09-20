// ==========================================
// MYSE — OFFICIAL WEBSITE
// Interactions & animations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // MENU MOBILE
  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".close-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeButton && mobileMenu) {
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Fermer le menu après avoir cliqué sur un lien
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });


  // ANIMATION D'APPARITION
  const elements = document.querySelectorAll(
    ".perfume-content, .story-content, .gallery-card, .value, .collection-card"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });


  // NEWSLETTER
  const newsletter = document.querySelector(".newsletter-form");

  if (newsletter) {
    newsletter.addEventListener("submit", event => {
      event.preventDefault();

      const email = newsletter.querySelector("input");

      if (email && email.value.trim() !== "") {
        alert(
          "Merci de rejoindre l'univers MYSE.\n\nThank you for joining the MYSE universe."
        );

        email.value = "";
      }
    });
  }

});
