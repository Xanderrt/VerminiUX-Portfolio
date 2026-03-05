//variantes
//Navbar
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu-wrapper");

//Filtros
const filters = document.querySelectorAll(".etiqueta-filtro");
const sections = document.querySelectorAll(".proyect-section");

const sectionMap = {
    "games": "games-section",
    "ux-ui": "ux-ui-section",
    "design": "design-section",
    "motion": "motion-section"
};

//Galeria diseño
const designModal = document.getElementById("design-modal");
const designModalImg = document.querySelector(".design-modal-img");
const designModalText = document.querySelector(".design-modal-text");

let currentIndex = 0;

const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");

//Galeria motion
const videoModal = document.getElementById("video-modal");
const videoWrapper = document.querySelector(".video-wrapper");
const closeVideo = document.querySelector(".close-video");

// comportamiento del Menú
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("show");
});

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

//objetos

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

    article.addEventListener("click", ()=>{
        openDesignModal(card.img, card.text);
    });

    return article;
}

function renderDesigns() {
    const container = document.getElementById("design-container");
    container.innerHTML = "";

    designs.forEach((design, index) => {
        const card = createDesignCard(design);

        card.addEventListener("click", ()=>{
            openDesignModalByIndex(index);
        });

        container.appendChild(card);
    });
}

function openDesignModal(img, text){
    designModalImg.src = img;
    designModalText.textContent = text;
    designModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeDesignModal(){
    designModal.classList.remove("active");
    document.body.style.overflow = "";
}

designModal.addEventListener("click", (e)=>{
    if(e.target === designModal){
        closeDesignModal();
    }
});

function openDesignModalByIndex(index){
    currentIndex = index;

    designModalImg.src = designs[currentIndex].img;
    designModalText.textContent = designs[currentIndex].text;

    designModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function changeImage(direction){

    const modalBox = document.querySelector(".design-modal-box");

    modalBox.classList.add("fade-out");

    setTimeout(()=>{

        currentIndex += direction;

        if(currentIndex < 0){
            currentIndex = designs.length - 1;
        }

        if(currentIndex >= designs.length){
            currentIndex = 0;
        }

        designModalImg.src = designs[currentIndex].img;
        designModalText.textContent = designs[currentIndex].text;

        modalBox.classList.remove("fade-out");

    }, 300);
}

leftArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    changeImage(-1);
});

rightArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    changeImage(1);
});


/* Motion */
function createVideoCard(card) {
    const article = document.createElement("article");
    article.classList.add("motion-card");

    article.innerHTML = `
        <div class="img-card motion-thumb">
            <img src="${card.img}" alt="${card.tittle}">
            <div class="motion-overlay">
                <span class="play-icon">▶</span>
            </div>
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

    article.querySelector(".motion-thumb")
        .addEventListener("click", () => openVideoModal(card.video));

    return article;
}

function renderVideos() {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    videos.forEach(video => {
        container.appendChild(createVideoCard(video));
    });
}

function openVideoModal(src){
    videoWrapper.innerHTML = `
        <video controls autoplay>
            <source src="${src}" type="video/mp4">
        </video>
    `;

    videoModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeVideoModal(){
    videoModal.classList.remove("active");
    videoWrapper.innerHTML = "";
    document.body.style.overflow = "";
}

closeVideo.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (e)=>{
    if(e.target === videoModal){
        closeVideoModal();
    }
});

document.addEventListener("DOMContentLoaded", () => {

  if (document.getElementById("games-container")) {
    renderGames();
  }

  if (document.getElementById("ux-container")) {
    renderUx();
  }

  if (document.getElementById("design-container")) {
    renderDesigns();
  }

  if (document.getElementById("video-container")) {
    renderVideos();
  }

});



