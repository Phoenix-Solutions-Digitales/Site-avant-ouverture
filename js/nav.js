/**
 * Phoenix Solutions Digitales 16 — nav.js
 * Comportement du menu de navigation (bouton ☰ sur mobile, sous-menu Démos).
 * Utilisé par toutes les pages du site.
 */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('navList');

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Sur mobile, un clic sur "Démos ▾" ouvre/ferme le sous-menu au lieu de suivre le lien
  document.querySelectorAll('.has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
});
