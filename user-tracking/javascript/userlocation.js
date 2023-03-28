var reqcount = 0;
var details = el("details");
var options = {
  enableHighAccuracy: false,
  timeout: 1000,
  maximumAge: 0,
};
navigator.geolocation.watchPosition(successCallback, errorCallback, options);
function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords;
  // Show a map centered at latitude / longitude.
  reqcount++;
  details.innerHTML = "Accuracy: " + accuracy + "<br>";
  details.innerHTML +=
    "Latitude: " + latitude + " | Longitude: " + longitude + "<br>";
  details.innerHTML += "Altitude: " + altitude + "<br>";
  details.innerHTML += "Heading: " + heading + "<br>";
  details.innerHTML += "Speed: " + speed + "<br>";
  details.innerHTML += "reqcount: " + reqcount;
}
function errorCallback(error) {}
function el(id) {
  return document.getElementById(id);
}
