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
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  window.addEventListener("mousemove", e => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.classList.add("active");
  });
  document.addEventListener("mouseleave", () => dot.classList.remove("active"));

  document.addEventListener("mouseover", e => {
    if (e.target.closest("[data-hover]")) dot.classList.add("hovering");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest("[data-hover]")) dot.classList.remove("hovering");
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

initReveal();
initCursor();
