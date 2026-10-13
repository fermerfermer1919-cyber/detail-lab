
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.classList.remove("open");
  menuToggle.textContent = "☰";
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Відкрити меню");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Закрити меню" : "Відкрити меню"
  );
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

// DETAIL LAB — SCROLL REVEAL

const animatedElements = document.querySelectorAll(
  ".section h2, .section .description, .service-card, .gallery-item, .price-card"
);

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  animatedElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (element.classList.contains("price-card")) {
      element.classList.add("delay-" + (index % 3));
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 40px 0px"
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  document.documentElement.classList.add("js-reveal");
}

// Interactive concept CTA: no contact data is sent.
const conceptButton = document.getElementById("conceptButton");
const contactStatus = document.getElementById("contactStatus");
if (conceptButton && contactStatus) {
  conceptButton.addEventListener("click", () => {
    contactStatus.hidden = false;
  });
}
