document.getElementById("text").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
       event.preventDefault();
       container.click();
    }
   });


   
   
   container.addEventListener('click', () => {
    const valeur_saisie = document.getElementById("text").value;
    const element = document.getElementById("zone_meteo");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + valeur_saisie + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric")
    .then(response => response.json()) 
     
    .then(data => {
         if (data.cod === "404") {
             element.innerHTML = "Erreur: La région saisie n'a pas été trouvée.";
         } else {
             element.innerHTML = 
             "La ville est : " + data.name + "<br>" +
             "Le code pays est : " + data.sys.country + "<br>" +
             "La temperature est de : " + data.main.temp + "°C" + "<br>" +
             "Le temps est : " + data.weather[0].description + "<br>" +
             "Le taux d'humidité est de : " + data.main.humidity + "%" + "<br>" +
             "La pression est de : " + data.main.pressure + "hPa" + "<br>" +
             "Le vent souffle à : " + data.wind.speed + "m/s";
         }
         // Fin du remplissage des informations envoyer par l'API...
    } )
   })