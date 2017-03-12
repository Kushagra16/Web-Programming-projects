"use strict";

var mymap=L.map('map').setView([47.6062, -122.3321], 13);
 
var baseUrl="https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime is not null&$order=datetime desc&$limit=500"

jQuery.getJSON(baseUrl)
    .then(onSearchResults,onSearchError);
    
function onSearchResults(data){
   console.log(data[0]);
   data.forEach(addMarker);   
}

function addMarker(ob){
    var property="address"+ob.address+"\n date & time"+ob.datetime+"\n type" + ob.report_location.type;
    if(ob.latitude!=null){
        createMarker(ob.latitude,ob.longitude,property);
    }    
}

function createMarker(la,lo,p){
    var marker=L.marker([la,lo]).addTo(mymap);
    marker.bindPopup(p).openPopup();
}

function onSearchError(response){
   // alert(response.responseJSON.error.message);
    console.log(response);
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia3VzaGFncmExNiIsImEiOiJjaW9kbGFvN2QwMDhxeXZtMmkxcmdhYzBtIn0.kmjd-xSXwXunANu1WI6ZQw'
}).addTo(mymap);

var marker=L.marker([47.6062,-122.3321]).addTo(mymap);
marker.bindPopup("<p>Hello world! this is Seattle</p>");