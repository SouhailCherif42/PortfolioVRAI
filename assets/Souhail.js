
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
      "mmm":"I'm in my 3rd year of a Bachelor's degree in Computer Science - Web Engineering.  I'm looking for a one-year work-study program starting in September 2023 in web development.<br></h4><p class='zebioo'>Go check <a href='Skills.html'>my skills</a> and <a href='portfolio.html'>my Portfolio</a> !</p>",
      "Call":"<span class='material-symbols-outlined'>event</span>Talk to me ?",
      "CV":"<span class='material-symbols-outlined'>picture_as_pdf</span>My Resume",
      "bas":"<h2>Hello !</h2><h2>I'm Souhail.</h2><div class='wrapper'><h2>I'm a <span>Apprentice developer !</span></h2></div>",
      "title":"Let's get in touch !",
      "text":"I'm in my 3rd year of a Bachelor's degree in Computer Science - Web Engineering.  I'm looking for a one-year work-study program starting in September 2023 in web development.<br> I'm open to work !",

  },
  "fr": {
      "a2":"Moi",
      "a3":"Portfolio",
      "a4":"Compétences",
      "a5":"Accueil",
      "music":"Son <i>OFF</i>",
      "Uppertext":"<h1>Salut !<br>Je suis Souhail.</h1><div class='wrapper'><div class='static-txt' id='static-txt'>Je suis</div><ul class='dynamic-txts'><li><span>Étudiant.</span></li><li><span>Ingénieur.</span></li><li><span>Developer.</span></li><li><span>Professionnel.</span></li></ul></div>",
      "mmm":"Je rentre en 3ème année de Bachelor Informatique - Ingénierie du Web.  Je suis à la recherche d'une alternance d'un an à partir de septembre 2023 dans le domaine du développement web. <br><p class='zebioo'>Allez voir <a href='Skills.html'>mes compétences</a> et <a href='portfolio.html'>mon Portfolio</a> !</p>", 
      "Call":"<span class='material-symbols-outlined'>event</span>Discuter avec moi ?",
      "CV":"<span class='material-symbols-outlined'>picture_as_pdf</span>Mon CV",
      "bas":"<h2>Salut !</h2><h2>Je suis Souhail.</h2><div class='wrapper'><h2>Je suis un <span>Apprenti développeur !</span></h2></div>",
      "title":"Contactez moi !",
      "text":"Je suis en 3ème année de Bachelor en informatique - ingénierie du web.  Je recherche une alternance d'un an à partir de septembre 2023 dans le domaine du développement web.<br> Je suis ouvert à toutes propositions !",

  }
};

/*document.getElementById("left1").innerHTML = translations[currentLang]["left1"];*/

// variable to hold current language
var currentLang = "en";

// function to update text with translations
function updateTextDesk() {
  document.getElementById("Call").innerHTML = translations[currentLang]["Call"];
  document.getElementById("CV").innerHTML = translations[currentLang]["CV"];
  document.getElementById("music").innerHTML = translations[currentLang]["music"];
  document.getElementById("mmm").innerHTML = translations[currentLang]["mmm"];
  document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
  document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
  document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
  document.getElementById("a5").innerHTML = translations[currentLang]["a5"];
}

function updateTextMob(){
  document.getElementById("title").innerHTML = translations[currentLang]["title"];
  document.getElementById("text").innerHTML = translations[currentLang]["text"];
  document.getElementById("bas").innerHTML = translations[currentLang]["bas"];
}

// function to toggle language
function toggleLang() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateTextDesk();
}

function toggleLang1() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateTextMob();
}

// add event listener to language toggle button
document.getElementById("language").addEventListener("click", toggleLang);

document.getElementById("language1").addEventListener("click", toggleLang1);
// call updateText function to set initial text
updateTextDesk();

updateTextMob();

window.addEventListener('resize', function() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (screenWidth <= 850) {
    document.body.classList.remove('finisher-header'); // Remplacez 'ma-classe' par la classe que vous souhaitez supprimer
  } else {
    document.body.classList.add('finisher-header'); // Ajoutez cette ligne si vous souhaitez réappliquer la classe lorsque la largeur de l'écran est supérieure à 850px
  }
});




