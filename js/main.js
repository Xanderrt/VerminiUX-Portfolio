//variantes
//Filtros
const filters = document.querySelectorAll(".etiqueta-filtro");
const sections = document.querySelectorAll(".proyect-section");

const sectionMap = {
    "games": "games-section",
    "ux-ui": "ux-ui-section",
    "design": "design-section",
    "motion": "motion-section"
};

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

// Comportamiento filtros

function setActiveFilter(activeFilter) {
    filters.forEach(filter => {
        filter.classList.remove("active");
    });
    activeFilter.classList.add("active");
}

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove("hidden");
    }
}

function showAllSections() {
    sections.forEach(section => {
        section.classList.remove("hidden");
    });
}

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const filterId = filter.id;

        setActiveFilter(filter);

        if (filterId === "all") {
            showAllSections();
        } else {
            showSection(sectionMap[filterId]);
        }
    });
});





