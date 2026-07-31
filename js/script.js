// Shared across all pages: scroll reveal + custom cursor.

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => observer.observe(item));
}

function initCursor() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  if (typeof gsap === "undefined") return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);
  gsap.set(dot, { xPercent: -50, yPercent: -50 });

  // Eased position + rotation via GSAP quickTo (reusable, high-perf tweens
  // built for frequent updates like mousemove) instead of snapping instantly —
  // the dot glides toward the pointer and rotates to face the direction of travel.
  const xTo = gsap.quickTo(dot, "x", { duration: 0.5, ease: "power3" });
  const yTo = gsap.quickTo(dot, "y", { duration: 0.5, ease: "power3" });
  const rotateTo = gsap.quickTo(dot, "rotate", { duration: 0.5, ease: "power3" });

  let lastX = window.innerWidth / 2;
  let lastY = window.innerHeight / 2;

  window.addEventListener("mousemove", e => {
    dot.classList.add("active");
    xTo(e.clientX);
    yTo(e.clientY);

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.hypot(dx, dy) > 1.5) {
      rotateTo(Math.atan2(dy, dx) * (180 / Math.PI) + 45);
    }
    lastX = e.clientX;
    lastY = e.clientY;
  });

  document.addEventListener("mouseleave", () => dot.classList.remove("active"));
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

initReveal();
initCursor();
