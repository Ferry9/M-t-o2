// J'ajoute un événement pour écouter les frappes sur l'élément avec l'id de "text"
document.getElementById("text").addEventListener("keyup", function(event) {
    // Je vérifie si la touche pressée est la touche "Entrée" (keyCode 13)
    if (event.keyCode === 13) {
       // J'empêche le comportement par défaut de la touche "Entrée" (qui est de soumettre un formulaire)
       event.preventDefault();
       // Je déclenche un clic sur l'élément avec  l'id du "container"
       container.click();
    }
});

// J'ajoute un événement pour écouter les clics sur l'élément avec l'ID "container"
container.addEventListener('click', () => {
    // Je récupère la valeur saisie dans l'élément avec l'ID "text"
    const valeur_saisie = document.getElementById("text").value;
    // Je récupère l'élément avec l'ID "zone_meteo"
    const element = document.getElementById("zone_meteo");
    // Je fais une requête fetch vers l'API OpenWeatherMap avec la valeur saisie
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + valeur_saisie + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric")
    .then(response => response.json()) 
    .then(data => {
         // Je vérifie si le code de retour (cod) est "404" (indiquant une erreur)
         if (data.cod === "404") {
             // Si c'est le cas, j'affiche un message d'erreur dans l'élément "zone_meteo"
             element.innerHTML = "Erreur: La région saisie n'a pas été trouvée.";
         } else {
             // Sinon, j'affiche les informations météorologiques dans l'élément "zone_meteo"
             element.innerHTML = 
             "La ville est : " + data.name + "<br>" +
             "Le code pays est : " + data.sys.country + "<br>" +
             "La temperature est de : " + data.main.temp + "°C" + "<br>" +
             "Le temps est : " + data.weather[0].description + "<br>" +
             "Le taux d'humidité est de : " + data.main.humidity + "%" + "<br>" +
             "La pression est de : " + data.main.pressure + "hPa" + "<br>" +
             "Le vent souffle à : " + data.wind.speed + "m/s";
         }
         // Fin du remplissage des informations envoyées par l'API...
    });
});
