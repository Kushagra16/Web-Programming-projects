"use strict";

function onGetPos(position){
    console.log(position.coords);
}
    
    function onErrorPos(err){
        
    }


if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(onGetPos, onErrorPos);
}