// Set current year in footer
(function setCurrentYear() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Example: smooth-scroll for same-page anchors (basic, no polyfills)
document.addEventListener('click', function (event) {
  var target = event.target.closest('a[href^="#"]');
  if (!target) return;
  var id = target.getAttribute('href');
  try {
    var el = document.querySelector(id);
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (_) {
    // ignore invalid selectors
  }
});

