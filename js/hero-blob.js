// Hero-only "scratch-off" reveal: an SVG clipPath that permanently
// accumulates circles wherever the cursor has traveled. The dark,
// inverted duplicate of the hero (see .hero-invert) is clipped to this
// shape, so once an area has been passed over it stays revealed —
// it does not fade back to the original design.
//
// Tunable constants:
const RADIUS = 120;       // circle radius in px — controls stroke thickness
const MIN_STEP = 10;      // min px moved before placing another circle
const MAX_CIRCLES = 3000; // safety cap so a very long session can't grow forever

(() => {
  const stack = document.getElementById("hero-stack");
  const clipPath = document.getElementById("heroClip");
  if (!stack || !clipPath) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  const svgNS = "http://www.w3.org/2000/svg";
  let lastX = null;
  let lastY = null;
  let count = 0;

  stack.addEventListener("mousemove", e => {
    if (count >= MAX_CIRCLES) return;
    const rect = stack.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastX !== null) {
      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist < MIN_STEP) return;
      // Fill in the gap between the last point and this one so fast
      // movement still leaves a continuous stroke, not scattered dots.
      const steps = Math.min(Math.ceil(dist / MIN_STEP), 40);
      for (let i = 1; i <= steps && count < MAX_CIRCLES; i++) {
        const t = i / steps;
        placeCircle(lastX + (x - lastX) * t, lastY + (y - lastY) * t);
      }
    } else {
      placeCircle(x, y);
    }
    lastX = x;
    lastY = y;
  });

  function placeCircle(x, y) {
    const c = document.createElementNS(svgNS, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", RADIUS);
    clipPath.appendChild(c);
    count++;
  }
})();
