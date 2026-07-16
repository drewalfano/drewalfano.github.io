(function () {
  var targets = document.querySelectorAll("[data-reveal], [data-reveal-soft]");
  if (!("IntersectionObserver" in window) || !targets.length) return;

  targets.forEach(function (el) {
    if (el.hasAttribute("data-reveal-soft")) {
      el.classList.add("reveal-soft");
    } else if (el.getAttribute("data-reveal") === "heading") {
      el.classList.add("reveal-heading");
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
