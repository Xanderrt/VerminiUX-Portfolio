// CLASES
class GameCard {
    constructor(img, tittle, text, bold, btnProyect, btnRepo){
        this. img = img;
        this.tittle = tittle;
        this.text = text;
        this.bold = bold;
        this.btnProyect = btnProyect;
        this.btnRepo = btnRepo;
    }
}

class UxCard {
    constructor(img, tittle, text, btn){
        this. img = img;
        this.tittle = tittle;
        this.text = text;
        this.btn = btn;
    }
}

class DesignCard {
    constructor(img, text){
        this.img = img;
        this.text = text;
    }
}

class VideoCard {
    constructor(img, tittle, text){
        this.img = img;
        this.tittle = tittle;
        this.text = text;
    }
}

//Objetos

//Juegos
const buscaRiesgos = new GameCard("img/galeria/game-caza-riesgos.gif", "Busca Riesgos", "Juego enfocado en identificar situaciones de riesgo dentro de un escenario simulado. Invita al usuario a observar con atención y analizar el entorno. Fortalece la capacidad de detectar errores antes de que se conviertan en consecuencias.", "Stack: HTML / CSS / JS", "https://xanderrt.github.io/busca-riesgos/", "https://github.com/Xanderrt/busca-riesgos")

const quiz = new GameCard("img/galeria/game-quiz.gif", "Quiz Interactivo", "Juego de preguntas con niveles de dificultad creciente. Pone a prueba el conocimiento y la capacidad de elegir con criterio, fomentando el análisis y la toma de decisiones bajo presión.", "Stack: HTML / CSS / JS", "https://xanderrt.github.io/quien-quiere-ser-millonario/", "https://github.com/Xanderrt/quien-quiere-ser-millonario")

const concentrece = new GameCard("img/galeria/game-concentrece.gif", "Concéntrese", "Dinámica basada en encontrar pares y recordar patrones. Más allá de la memoria, estimula la concentración, la organización mental y la creación de pequeñas estrategias para mejorar el rendimiento.", "Stack: HTML / CSS / JS", "https://xanderrt.github.io/concentrece/", "https://github.com/Xanderrt/concentrece")

const dragDrop = new GameCard("img/galeria/game-arrastra.gif", "Arrastrar & Soltar", "Actividad en la que el usuario debe relacionar elementos correctamente. Promueve el aprendizaje activo, ayudando a comprender conceptos a través de la práctica y la lógica visual.", "Stack: HTML / CSS / JS", "https://xanderrt.github.io/drag-and-drop-game/", "https://github.com/Xanderrt/drag-and-drop-game")

// UX

const calma = new UxCard("img/galeria/ux-calma.png", "Calma", "Tipo: App", "https://www.behance.net/gallery/115525251/Calma-diseno-UXUI") 

const foxBox = new UxCard("img/galeria/ux-foxbox.png", "FoxBox", "Tipo: Web / Mobile", "#") 

const tCarga = new UxCard("img/galeria/ux-t-carga.png", "T-Carga", "Tipo: App", "https://www.behance.net/gallery/120154399/T-carga-clientes-(UI-Desing)") 

// Diseño

const imagen1 = new DesignCard("img/galeria/mini-galery-1.png", "Este será el texto de la galeria expandida 1")

const imagen2 = new DesignCard("img/galeria/mini-galery-2.png", "Este será el texto de la galeria expandida 2")

const imagen3 = new DesignCard("img/galeria/mini-galery-3.png", "Este será el texto de la galeria expandida 3")

const imagen4 = new DesignCard("img/galeria/mini-galery-4.png", "Este será el texto de la galeria expandida 4")

const imagen5 = new DesignCard("img/galeria/mini-galery-5.png", "Este será el texto de la galeria expandida 5")

const imagen6 = new DesignCard("img/galeria/mini-galery-6.png", "Este será el texto de la galeria expandida 6")

const imagen7 = new DesignCard("img/galeria/mini-galery-7.png", "Este será el texto de la galeria expandida 7")

const imagen8 = new DesignCard("img/galeria/mini-galery-8.png", "Este será el texto de la galeria expandida 8")

// video

const reel = new VideoCard("img/galeria/tn-1.png", "Reel de animación", "Una muestra de animación 2D enfocada en dar vida a ideas a través de narrativa, ritmo y expresión visual.")

const alturas = new VideoCard("img/galeria/tn-2.png", "Alturas Seguras - Terratest", "Cápsula educativa desarrollada para Terratest, orientada a comunicar los principales riesgos y medidas de prevención.")

const postura = new VideoCard("img/galeria/tn-3.png", "Higiene Postural - J&T", "Desarrollado para entornos móviles, orientado a promover hábitos saludables a trabajadores en modalidad home office.")

const visual = new VideoCard("img/galeria/tn-4.png", "Cuidado Visual - Autoboy", "Video musical, diseñado para sensibilizar a conductores sobre la importancia del cuidado visual y la prevención de riesgos en la vía.")

//Arrays
const games = [buscaRiesgos, quiz, concentrece, dragDrop];

const uxProjects = [calma, foxBox, tCarga];

const designs = [
  imagen1, imagen2, imagen3, imagen4,
  imagen5, imagen6, imagen7, imagen8
];

const videos = [reel, alturas, postura, visual];