// Fonction qui est appelée lorsque le bouton de recherche de météo est cliqué
function buttonClickGET() {
    // Récupère la valeur de l'input avec l'ID "text" (nom de la ville)
    const ville = document.getElementById("text").value;
    
    // Construit l'URL de l'API en utilisant la valeur de l'input
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    

    
    // Utilise jQuery pour envoyer une requête GET à l'URL de l'API
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })

    .fail(function() {
        alert( "erreur" );
    })

    .always(function() {
        //alert( "finished" );
    });
}

// Fonction de rappel qui est appelée lorsque la requête GET à l'API réussit
function callBackGetSuccess(data) {
    // Récupère l'élément HTML avec l'ID "zone_meteo"
    const element = document.getElementById("zone_meteo");
    
    // Remplit l'élément HTML avec les informations météorologiques récupérées de l'API
    element.innerHTML = 
    "La ville est : " + data.name + "<br>" +
    "Le code pays est : " + data.sys.country + "<br>" +
    "La temperature est de : " + data.main.temp + "°C" + "<br>" +
    "Le temps est : " + data.weather[0].description + "<br>" +
    "Le taux d'humidité est de : " + data.main.humidity + "%" + "<br>" +
    "La pression est de : " + data.main.pressure + "hPa" + "<br>" +
    "Le vent souffle à : " + data.wind.speed + "m/s";
}