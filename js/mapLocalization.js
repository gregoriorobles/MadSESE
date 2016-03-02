function initMap() {
    var mapDiv = document.getElementById('map2');

    var location = {lat:  40.284611, lng: -3.818766};

    var map = new google.maps.Map(mapDiv, {
      center: location,
      zoom: 16
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'MadSESE, Seminar 144 room'
    });

}
