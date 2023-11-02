function buttonClickGET() {
    const ville = document.getElementById("text").value; // Récupère la valeur de l'input avec l'ID "text"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    
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

function callBackGetSuccess(data) {
    const element = document.getElementById("zone_meteo");
    element.innerHTML = 
    "La ville est : " + data.name + "<br>" +
    "Le code pays est : " + data.sys.country + "<br>" +
    "La temperature est de : " + data.main.temp + "°C" + "<br>" +
    "Le temps est : " + data.weather[0].description + "<br>" +
    "Le taux d'humidité est de : " + data.main.humidity + "%" + "<br>" +
    "La pression est de : " + data.main.pressure + "hPa" + "<br>" +
    "Le vent souffle à : " + data.wind.speed + "m/s";
}