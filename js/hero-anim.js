// Hero reveal animation — matches the exact GSAP parameters used on the
// reference site: duration 1.4s, ease power3.out, delay 0.2s, stagger 0
// (each text block rises and fades in as one unified block, not per-word).
(() => {
  if (typeof gsap === "undefined" || typeof SplitType === "undefined") return;

  const baseAnimationDuration = 1.4;
  const defaultEase = "power3.out";
  const baseDelay = 0.2;

  const intro = new SplitType("#hw-lead, #hw-para", { tagName: "div", types: "lines, words" });
  gsap.fromTo(
    intro.words,
    { yPercent: 120, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: baseAnimationDuration, stagger: 0, ease: defaultEase, delay: baseDelay }
  );

  const giant = document.getElementById("hw-giant");
  if (giant) {
    const title = new SplitType(giant, { tagName: "div", types: "lines, words" });
    gsap.fromTo(
      title.words,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: baseAnimationDuration, stagger: 0, ease: defaultEase, delay: baseDelay }
    );
  }
})();
