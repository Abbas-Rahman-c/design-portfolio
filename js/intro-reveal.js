// One-time intro on the links page: a full-white screen with a big
// italic heading. On the first click, scroll, or keypress, the white
// background fades out while the heading itself shrinks and glides
// into position, becoming the small role line above the bio.
(() => {
  const overlay = document.getElementById("intro-overlay");
  const heading = document.getElementById("intro-heading");
  const target = document.getElementById("links-role-target");
  if (!overlay || !heading || !target || typeof gsap === "undefined") return;

  document.body.style.overflow = "hidden";
  let done = false;

  function reveal() {
    if (done) return;
    done = true;

    const startRect = heading.getBoundingClientRect();
    const endRect = target.getBoundingClientRect();
    const startFont = parseFloat(getComputedStyle(heading).fontSize);
    const endFont = parseFloat(getComputedStyle(target).fontSize);
    const scale = endFont / startFont;

    // Reparent to <body> as position:fixed so it can glide freely above
    // the page while the white overlay behind it fades away.
    document.body.appendChild(heading);
    gsap.set(heading, {
      position: "fixed",
      left: startRect.left,
      top: startRect.top,
      margin: 0,
      zIndex: 501,
      transformOrigin: "top left"
    });

    overlay.style.pointerEvents = "none";
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => { overlay.style.display = "none"; }
    });

    gsap.to(heading, {
      left: endRect.left,
      top: endRect.top,
      scale: scale,
      duration: 0.9,
      ease: "power3.inOut",
      onComplete: () => {
        heading.style.visibility = "hidden";
        target.style.opacity = "1";
        document.body.style.overflow = "";
      }
    });
  }

  overlay.addEventListener("click", reveal);
  window.addEventListener("wheel", reveal, { once: true, passive: true });
  window.addEventListener("touchmove", reveal, { once: true, passive: true });
  window.addEventListener("keydown", reveal, { once: true });
})();
