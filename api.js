var map = null;

var x = document.getElementById('error')
var clearId;

function showlocation() {
// One-shot position request.
    navigator.geolocation.watchPosition(callback);
}

function callback(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var alt_acc = position.coords.altitudeAccuracy;
    var speed = position.coords.speed;

    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('longitude').innerHTML = lon;
    document.getElementById('accuracy').innerHTML = acc;
    document.getElementById('altitude').innerHTML = alt;
    document.getElementById('alt-accuracy').innerHTML = alt_acc;
    document.getElementById('speed').innerHTML = speed;

    var latLong = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({
    position: latLong
});

marker.setMap(map);
map.setZoom(100);
map.setCenter(marker.getPosition());
}

google.maps.event.addDomListener(window, 'load', initMap);
function initMap() {
var mapOptions = {
center: new google.maps.LatLng(0, 0),
zoom: 1,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map-canvas"),
mapOptions);

}