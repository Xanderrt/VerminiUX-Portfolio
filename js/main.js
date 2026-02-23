//variantes

// comportamiento del Menú
document.addEventListener("DOMContentLoaded", () => {

  let currentPath = window.location.pathname.split("/").pop();

  if (currentPath === "") {
    currentPath = "index.html";
  }

  const menuLinks = document.querySelectorAll(".menu-wrapper a");

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

});