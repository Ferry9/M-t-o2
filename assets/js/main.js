// Fonction pour écouter l'évènement au click sur la touche numéro 13 (entré)...
document.getElementById("text").addEventListener("keyup", function (event) {
  // Condition pour vérifie si la touche pressée est la touche "Entrée" (keyCode 13)
  if (event.keyCode === 13) {
    // Emmpêche le comportement par défaut de la touche "Entrée" ('soumission du formulaire)
    event.preventDefault();
    // Déclanchement au clic sur le boutton avec l'id du "container"
    container.click();
  }
});

// Fonction pour écouter l'évènement au click du boutton
container.addEventListener("click", () => {
  // Récupération de la valeur saisie dans l'input de type texte(id: text)...
  const valeur_saisie = document.getElementById("text").value;
  // Récupération le l'id ou seront affichées les résultas (zone météo)...
  const element = document.getElementById("zone_meteo");

  // Requêtte vers l'api avec la valeur saisie dans l'id text...
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      valeur_saisie +
      "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      // Vérification si le code de retour est 404. Si c'est le cas, affichage erreur ...
      if (data.cod === "404") {
        // Si c'est le code 404, écrire à l'utilisateur le message d'erreur...
        element.innerHTML = "Erreur: La région saisie n'a pas été trouvée.";
      } else {
        // Dans le cas contrire, afficher les information reçu à l'utilisateur...
        element.innerHTML =
          "La ville est : " +
          data.name +
          "<br>" +
          "Le code pays est : " +
          data.sys.country +
          "<br>" +
          "La temperature est de : " +
          data.main.temp +
          "°C" +
          "<br>" +
          "Le temps est : " +
          data.weather[0].description +
          "<br>" +
          "Le taux d'humidité est de : " +
          data.main.humidity +
          "%" +
          "<br>" +
          "La pression est de : " +
          data.main.pressure +
          "hPa" +
          "<br>" +
          "Le vent souffle à : " +
          data.wind.speed +
          "m/s";
      }
      // Fin du remplissage des informations envoyées par l'API...
    });
});







let compteur = document.getElementById('compteur');
let bienvenue = "Bienvenu sur Appli Météo ...";
let index = 0;

function animerCompteur() {
    if (index < bienvenue.length) {
        compteur.textContent += bienvenue.charAt(index);
        index++;
    } else {
        index = 0;
        compteur.textContent = "";
    }
}

setInterval(animerCompteur, 300); // Vitesse d'animation du compteur