(function () {
  var targets = document.querySelectorAll("[data-reveal], [data-reveal-soft]");
  if (!("IntersectionObserver" in window) || !targets.length) return;

  targets.forEach(function (el) {
    if (el.hasAttribute("data-reveal-soft")) {
      el.classList.add("reveal-soft");
    } else {
      el.classList.add("reveal");
    }
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

// Scroll-driven parallax, desktop only: currently just the About portrait
// (data-parallax="portrait") — the site's one scroll-driven effect after
// the featured-row badge parallax was removed. Generic over any future
// [data-parallax] element. Prefers a CSS scroll-timeline animation; falls
// back to a throttled rAF scroll listener for browsers without it
// (currently Firefox). Fully skipped under prefers-reduced-motion, since
// the fallback path computes its own transform and isn't covered by the
// sitewide transition-duration override.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var els = document.querySelectorAll("[data-parallax]");
  if (!els.length) return;

  var isDesktopQuery = window.matchMedia("(min-width: 768px)");

  function eligible() {
    return isDesktopQuery.matches;
  }

  var supportsScrollTimeline = window.CSS && CSS.supports && CSS.supports("animation-timeline", "view()");

  if (supportsScrollTimeline) {
    els.forEach(function (el) {
      if (eligible(el)) el.classList.add("parallax-scroll");
    });
    return;
  }

  var targets = Array.prototype.filter.call(els, eligible);
  if (!targets.length) return;

  var ticking = false;
  function update() {
    var vh = window.innerHeight;
    targets.forEach(function (el) {
      var range = parseFloat(el.dataset.parallaxRange) || 12;
      var rect = el.getBoundingClientRect();
      var progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
      progress = Math.max(-1, Math.min(1, progress));
      el.style.transform = "translateY(" + (progress * range) + "px)";
    });
    ticking = false;
  }
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
