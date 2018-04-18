function initMap() {
    var mapDiv = document.getElementById('map2');

    var location = {lat: 40,513237, lng: -3,349792};

    var map = new google.maps.Map(mapDiv, {
      center: location,
      zoom: 16
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'MadSESE @ UAH Escuela Politécnica'
    });

}
