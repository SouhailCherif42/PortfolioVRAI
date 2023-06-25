
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
      "a5":"Home",
      "music":"Sound <i>OFF</i>",
      "Uppertext":"<h1>Hello !<br>I'm Souhail.</h1><div class='wrapper'><div class='static-txt' id='static-txt'>I'm a</div>",
      "mmm":"I'm in my 3rd year of a Bachelor's degree in Computer Science - Web Engineering.  I'm looking for a one-year work-study program starting in September 2023 in web development.<br>Go check <a href='Skills.html'>my skills</a> and <a href='portfolio.html'>my Portfolio</a> !",
      "Call":"<span class='material-symbols-outlined'>event</span>Talk to me ?",
      "CV":"<span class='material-symbols-outlined'>picture_as_pdf</span>My Resume",
  },
  "fr": {
      "a2":"Moi",
      "a3":"Portfolio",
      "a4":"Compétences",
      "a5":"Accueil",
      "music":"Son <i>OFF</i>",
      "Uppertext":"<h1>Salut !<br>Je suis Souhail.</h1><div class='wrapper'><div class='static-txt' id='static-txt'>Je suis</div><ul class='dynamic-txts'><li><span>Étudiant.</span></li><li><span>Ingénieur.</span></li><li><span>Developer.</span></li><li><span>Professionnel.</span></li></ul></div>",
      "mmm":"Je rentre en 3ème année de Bachelor Informatique - Ingénierie du Web.  Je suis à la recherche d'une alternance d'un an à partir de septembre 2023 dans le domaine du développement web. <br>Allez voir <a href='Skills.html'>mes compétences</a> et <a href='portfolio.html'>mon Portfolio</a> !", 
      "Call":"<span class='material-symbols-outlined'>event</span>Discuter avec moi ?",
      "CV":"<span class='material-symbols-outlined'>picture_as_pdf</span>Mon CV",
  }
};

/*document.getElementById("left1").innerHTML = translations[currentLang]["left1"];*/

// variable to hold current language
var currentLang = "en";

// function to update text with translations
function updateText() {
  document.getElementById("Call").innerHTML = translations[currentLang]["Call"];
  document.getElementById("CV").innerHTML = translations[currentLang]["CV"];
  document.getElementById("music").innerHTML = translations[currentLang]["music"];
  document.getElementById("mmm").innerHTML = translations[currentLang]["mmm"];
  document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
  document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
  document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
  document.getElementById("a5").innerHTML = translations[currentLang]["a5"];
}

// function to toggle language
function toggleLang() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateText();
}

// add event listener to language toggle button
document.getElementById("language").addEventListener("click", toggleLang);

// call updateText function to set initial text
updateText();





