"use strict";

var mymap = L.map('map').setView([12.9716, 77.5946], 13);              // 13 is zoom level
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia3VzaGFncmExNiIsImEiOiJjaW9kbGFvN2QwMDhxeXZtMmkxcmdhYzBtIn0.kmjd-xSXwXunANu1WI6ZQw'
}).addTo(mymap);

var marker = L.marker([12.9716, 77.5946]).addTo(mymap);
marker.bindPopup("<p>Hello World! Here I am! </p>");