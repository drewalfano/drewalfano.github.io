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

// Cursor-reactive card shadow: tracks the mouse over any .project-card and
// leans the existing accent-glow's offset away from the cursor, like a
// light source (see the matching rule in src/input.css — this only ever
// writes --shadow-x/--shadow-y, the glow's blur/spread/color are untouched).
// One delegated listener covers every card on every page rather than
// attaching per-card. Skipped entirely for touch (no cursor to track) and
// reduced motion (CSS falls back to the original static offset in both
// cases) — this only handles the reactive tracking.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;

  var MAX_OFFSET = 8;
  var activeCard = null;

  function resetCard(card) {
    card.classList.remove("is-shadow-tracking");
    card.style.setProperty("--shadow-x", "0px");
    card.style.setProperty("--shadow-y", "0px");
  }

  function updateCard(card, clientX, clientY) {
    var rect = card.getBoundingClientRect();
    var nx = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    var ny = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    nx = Math.max(-1, Math.min(1, nx));
    ny = Math.max(-1, Math.min(1, ny));
    card.classList.add("is-shadow-tracking");
    card.style.setProperty("--shadow-x", (-nx * MAX_OFFSET).toFixed(2) + "px");
    card.style.setProperty("--shadow-y", (-ny * MAX_OFFSET).toFixed(2) + "px");
  }

  document.addEventListener(
    "mousemove",
    function (e) {
      var card = e.target.closest ? e.target.closest(".project-card") : null;
      if (card !== activeCard) {
        if (activeCard) resetCard(activeCard);
        activeCard = card;
      }
      if (card) updateCard(card, e.clientX, e.clientY);
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", function () {
    if (activeCard) {
      resetCard(activeCard);
      activeCard = null;
    }
  });
})();

// Nav logo one-time intro unfurl: on the first page load of a session, "DA"
// unfurls into "Drew Alfano", holds a readable beat, then settles back to
// "DA". Plays on every device (not hover-gated), so touch/mobile gets the
// reveal the hover interaction alone can't offer. sessionStorage gates it to
// once per visit so it doesn't replay on every navigation.
//
// Sequencing hook for the (later) homepage hero entrance: if a
// [data-hero-entrance] element is present, the unfurl waits for the hero to
// finish and dispatch a "hero:revealed" event on document, then follows a
// beat later so the two read as one sequence instead of firing at once. A
// safety timer still plays it if that signal never arrives. Pages with no
// hero entrance just play it shortly after load. Fully skipped under
// prefers-reduced-motion (the flag is still set, so it stays quiet all visit).
(function () {
  var logo = document.querySelector(".nav-logo");
  if (!logo) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var KEY = "nav-unfurl-played";
  try {
    if (sessionStorage.getItem(KEY)) return;
  } catch (e) {
    // sessionStorage unavailable (private mode, etc.): fall through and play
    // once for this load rather than tracking across navigations.
  }

  var HERO_FOLLOW_MS = 220;   // beat after the hero reveal settles
  var HERO_SAFETY_MS = 2200;  // hero present but never signalled: play anyway
  var FALLBACK_MS = 550;      // no hero on this page: play shortly after load
  var OPEN_HOLD_MS = 1400;    // how long "Drew Alfano" holds open before settling
  var MIN_GAP = 16;           // breathing room to keep between the open logo and the nav

  // Would the fully-expanded "Drew Alfano" clear the nav without colliding?
  // Each hidden segment span keeps its intrinsic text width even while the
  // grid clips it to 0fr, so scrollWidth tells us how far the logo will grow.
  // On very narrow viewports (~320px) it doesn't fit, so the intro is skipped
  // rather than clip the wordmark into the nav links.
  function fits() {
    var nav = logo.parentElement.querySelector("nav");
    if (!nav) return true;
    var grow = 0;
    logo.querySelectorAll(".nav-logo-seg > span").forEach(function (s) {
      grow += s.scrollWidth;
    });
    var expandedRight = logo.getBoundingClientRect().right + grow;
    return expandedRight + MIN_GAP <= nav.getBoundingClientRect().left;
  }

  var played = false;
  function play() {
    if (played || !fits()) return; // too narrow: leave the flag unset so a wider page can still play it
    played = true;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {}
    logo.classList.add("is-unfurling");
    setTimeout(function () {
      logo.classList.remove("is-unfurling");
    }, OPEN_HOLD_MS);
  }

  if (document.querySelector("[data-hero-entrance]")) {
    document.addEventListener(
      "hero:revealed",
      function () {
        setTimeout(play, HERO_FOLLOW_MS);
      },
      { once: true }
    );
    setTimeout(play, HERO_SAFETY_MS);
  } else {
    setTimeout(play, FALLBACK_MS);
  }
})();
