const texts = [
    "PharmaWeb es una plataforma informativa dedicada a ofrecer contenido confiable y accesible sobre el mundo de los medicamentos. Nuestro objetivo es brindar a los usuarios conocimientos claros sobre el uso adecuado de los fármacos, sus componentes, indicaciones, efectos secundarios, interacciones, y recomendaciones generales de salud. Aquí encontrarás artículos, guías y recursos sobre medicamentos de uso común y especializado, así como temas relacionados con la automedicación, prescripción médica, normativas sanitarias y avances en la industria farmacéutica. Ya seas estudiante, profesional de la salud o simplemente alguien que busca informarse mejor, PharmaWeb es tu espacio para aprender sobre medicamentos de forma segura y responsable."
];

let currentIndex = 0;

function showText(index) {
    document.getElementById("slider-text").textContent = texts[index];
}

function nextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    showText(currentIndex);
}

function prevText() {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    showText(currentIndex);
}