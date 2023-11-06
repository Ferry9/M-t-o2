// Fonction pour vérifier si la touche "Entrée" a été enfoncée
function enterKeyUp() {
    // Si la touche "Entrée" a été enfoncée, lance la recherche
    if (event.keyCode === 13) {
        buttonClickGET();
    }
}  // Fin de la fonction qui vérifie l'évènement du clic de la touche entré de l'ordinateur...



// Fonction qui est appelée lorsque le bouton de recherche de météo est cliqué
function buttonClickGET() {
    // Récupère la valeur de l'input avec l'ID "text" (nom de la ville)
    const valeur_saisie = document.getElementById("text").value;


    
    // Construit l'URL de l'API en utilisant la valeur de l'input
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + valeur_saisie + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    
    // Utilise jQuery pour envoyer une requête GET à l'URL de l'API
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })

    .fail(function() {
        alert( "Ce nom n'existe pas dans notre base de donnée..." );
    })

    .always(function() {
        //alert( "finished" );
    });
} // Fin de la fonction d'envois de la requêt http par le canal de jQuery...




// Fonction de rappel qui est appelée lorsque la requête GET à l'API réussit
function callBackGetSuccess(data) {
    // Récupère l'élément HTML avec l'ID "zone_meteo"
    const element = document.getElementById("zone_meteo");
    const element2 = document.getElementById("image");

    // Obtenez le code de condition de la météo
    const conditionCode = data.weather[0].id;

    //Déterminer l'image appropriée à afficher
    let imgSrc = "https://openweathermap.org/img/wn/" + conditionCode + "@2x.png";

    
    // Remplit l'élément HTML avec les informations météorologiques récupérées de l'API
    element.innerHTML = 
    "La ville est : " + data.name + "<br>" +
    "Le code pays est : " + data.sys.country + "<br>" +
    "La temperature est de : " + data.main.temp + "°C" + "<br>" +
    "Le temps est : " + data.weather[0].description + "<br>" +
    "Le taux d'humidité est de : " + data.main.humidity + "%" + "<br>" +
    "La pression est de : " + data.main.pressure + "hPa" + "<br>" +
    "Le vent souffle à : " + data.wind.speed + "m/s";
    // Fin du remplissage des informations envoyer par l'API...

    
    // Ajoute la balise <img> à la fin du contenu HTML
    element2.insertAdjacentHTML('beforeend', "<img src='" + imgSrc + "' alt='" + data.weather[0].description + "'>");
    // Fin de l'ajout d'images météo synchronisée fonction du temps qu'il fait...
    
}  // Fin de la fonction de rappel...




// Fonction principale qui est exécutée lors du chargement de la page
function main() {
    // Ajoute un écouteur d'événements pour détecter lorsqu'une touche est enfoncée
    document.getElementById("text").addEventListener("keyup", enterKeyUp);
}

// Exécute la fonction principale
main();