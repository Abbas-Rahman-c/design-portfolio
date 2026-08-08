// Home page intro: a full-white screen with "Creative Designer" in script
// type. On the first cursor movement (or tap/click as a touch fallback),
// the white background fades out while the text itself shrinks and glides
// into position, becoming the small script heading in the hero layout.
(() => {
  const overlay = document.getElementById("intro-overlay");
  const heading = document.getElementById("intro-script");
  const target = document.getElementById("script-target");
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

  window.addEventListener("mousemove", reveal, { once: true });
  window.addEventListener("touchstart", reveal, { once: true, passive: true });
  overlay.addEventListener("click", reveal);
})();
