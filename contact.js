// Initialisation de AOS pour les animations au scroll
AOS.init({
    duration: 1000, // Durée de l'animation
    easing: 'ease-in-out', // Type de courbe d'animation
    once: true, // L'animation se déclenche une seule fois
    mirror: false, // L'animation ne se répète pas en revenant dans la vue
});

// Fonction d'initialisation de la carte Google Maps
function initMap() {
    var location = { lat: 48.8566, lng: 2.3522 };  // Coordonnées de Paris (ajustez selon le lieu du propriétaire)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
