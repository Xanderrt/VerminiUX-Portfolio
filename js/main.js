import { games, uxProjects, designs, videos } from "./objetos.js";

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

/*  Renderizar tarjetas  */
/* Juegos */
function createGameCard(card) {
    const article = document.createElement("article");
    article.classList.add("game-card"); // usa exactamente la clase que ya tienes en tu CSS

    article.innerHTML = `
        <div class="img-card">
            <img src="${card.img}" alt="${card.tittle}">
        </div>
        <div class="info-card">
            <div class="tittle-card">    
              <h3>${card.tittle}</h3>
            </div>
            <div class="text-card">
              <p>${card.text}</p>
            </div>            
            <p class="bold">${card.bold}</p>
            <div class="btn-wrapper">
                <a class="btn" href="${card.btnProyect}" target="_blank">Ver proyecto</a>
                <a class="btn btn-alt" href="${card.btnRepo}" target="_blank">Repositorio</a>
            </div>
        </div>
    `;
  
    return article;
}

function renderGames() {
    const container = document.getElementById("games-container");
    container.innerHTML = "";

    games.forEach(game => {
        container.appendChild(createGameCard(game));
    });
}

/*  UX / UI  */
function createUxCard(card) {
    const article = document.createElement("article");
    article.classList.add("ux-card");

    article.innerHTML = `
        <div class="img-card">
            <img src="${card.img}" alt="${card.tittle}">
        </div>
        <div class="info-card">
            <div class="tittle-card">
              <h3>${card.tittle}</h3>
            </div>
            <div class="text-card-ux">
              <p>${card.text}</p>
            </div> 
            <div class="btn-wrapper">
              <a class="btn" href="${card.btn}" target="_blank">Ver caso</a>
            </div>
        </div>
    `;

    return article;
}

function renderUx() {
    const container = document.getElementById("ux-container");
    container.innerHTML = "";

    uxProjects.forEach(project => {
        container.appendChild(createUxCard(project));
    });
}

/* Diseño */
function createDesignCard(card) {
    const article = document.createElement("article");
    article.classList.add("design-card");

    article.innerHTML = `
        <div class="img-card">
            <img src="${card.img}" alt="Diseño">
        </div>
    `;

    return article;
}

function renderDesigns() {
    const container = document.getElementById("design-container");
    container.innerHTML = "";

    designs.forEach(design => {
        container.appendChild(createDesignCard(design));
    });
}


/* Motion */
function createVideoCard(card) {
    const article = document.createElement("article");
    article.classList.add("motion-card");

    article.innerHTML = `
        <div class="img-card">
            <img src="${card.img}" alt="${card.tittle}">
        </div>
        <div class="info-card">
            <div class="tittle-card">    
              <h3>${card.tittle}</h3>
            </div>
            <div class="text-card-motion">
              <p>${card.text}</p>
            </div>  
        </div>
    `;

    return article;
}

function renderVideos() {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    videos.forEach(video => {
        container.appendChild(createVideoCard(video));
    });
}

renderGames();
renderUx();
renderDesigns();
renderVideos();




