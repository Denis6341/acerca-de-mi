document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces dentro de la navbar
  document.querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .dropdown-item").forEach(function (link) {
    link.addEventListener("click", function () {
      // Si el enlace es un "dropdown-toggle" (abre submenú), NO cerramos la navbar
      if (link.classList.contains("dropdown-toggle")) {
        return; 
      }

      // Si es un enlace normal o un dropdown-item, cerramos la navbar
      let navbarToggler = document.querySelector(".navbar-toggler");
      let navbarCollapse = document.querySelector(".navbar-collapse");

      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });
  });
});
