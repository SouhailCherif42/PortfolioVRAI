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
        "title1":"< Projects />",
        "tit":"Here you'll find all the projects I've worked on.",
    },
    "fr": {
        "a2":"Moi",
        "a3":"Portfolio",
        "a4":"Compétences",
        "music":"Son <i>OFF</i>",
        "title1":"< Projets />",
        "tit":"Vous trouverez ici tous les projets sur lesquels j'ai travaillé.",
    }
  };
  
  /*document.getElementById("exemple").innerHTML = translations[currentLang]["exemple"];*/
  
  var currentLang = "en";
  
  function updateText() {
    document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
    document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
    document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
    document.getElementById("music").innerHTML = translations[currentLang]["music"];
    document.getElementsById("title1").innerHTML = translations[currentLang]["title1"];
    document.getElementsById("tit").innerHTML = translations[currentLang]["tit"];
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