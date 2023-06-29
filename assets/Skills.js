
window.addEventListener("blur", () => {
  document.title = "Ou-est-tu passé ?";
})
window.addEventListener("focus", () => {
  document.title = "Souhail"
})

var translations = {
  "en": {
      "a2":"About me",
      "a3":"Portfolio",
      "a4":"Skills",
      "music":"Sound <i>OFF</i>",
      "mmmm":"As a junior Full-Stack developer, I have a strong foundation in HTML, CSS, and JavaScript. I am able to create responsive and user-friendly websites, and I have expanded my skills by working with various technologies. Through my experience, I have gained proficiency in React.js, Three.js, and Tilt.js, which have allowed me to enhance my projects and deliver engaging user experiences.",
      "m293":"My Skills",
  },
  "fr": {
      "a2":"Moi",
      "a3":"Portfolio",
      "a4":"Compétences",
      "music":"Son <i>OFF</i>",
      "mmmm":"En tant que développeur Full-Stack junior, j'ai de solides bases en HTML, CSS et JavaScript. Je suis capable de créer des sites web réactifs et conviviaux, et j'ai élargi mes compétences en travaillant avec diverses technologies. Grâce à mon expérience, j'ai acquis des compétences en React.js, Three.js et Tilt.js, ce qui m'a permis d'améliorer mes projets et de fournir des expériences utilisateur attrayantes.",
      "m293":"Mes Compétences",
  }
};

/*document.getElementById("exemple").innerHTML = translations[currentLang]["exemple"];*/

var currentLang = "en";

function updateText() {
  document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
  document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
  document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
  document.getElementById("music").innerHTML = translations[currentLang]["music"];
  document.getElementById("mmmm").innerHTML = translations[currentLang]["mmmm"];
  document.getElementById("m293").innerHTML = translations[currentLang]["m293"];
}

function toggleLang() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateText();
}

document.getElementById("language").addEventListener("click", toggleLang);

var languageButton = document.getElementById("language");
languageButton.addEventListener("click", toggleLang);

updateText();