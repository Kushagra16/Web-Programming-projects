/**
 * app.js
 * main application script for the movies challenge
 * add code here to calculate the various metrics
 * required by the challenge, and add them to the
 * tables already created in index.html
 * the array of movies is available via the global
 * variable `movies` (see data/movies-2015.js)
 */

"use strict";





var distinctAGs={};
movies.forEach(function(record){
    //console.log(record.income_group);
    var stats=distinctAGs[record.genre];
    if(undefined==stats){
        stats={sum:0,count:0, genre:record.genre, avg:0};
        distinctAGs[record.genre]=stats;
    }
    
    stats.sum+=record.gross;
    stats.count++;
    stats.avg=stats.sum/stats.count;
});

console.log(distinctAGs);


var keys=Object.keys(distinctAGs);
keys.forEach(function(key){
    var stats=distinctAGs[key];
    var avg=stats.sum/stats.count;
    console.log("%s=%d",key,avg);
});

var Arr=[];

function HashToArr(record){
    var keys=Object.keys(record);
    keys.forEach(function(key){
        var ags=distinctAGs[key];
        var value={};
        value["genre"]=ags.genre;
        value["avg"]=ags.avg;
        Arr.push(value);       
    });
}

HashToArr(distinctAGs);

// Arr.sort(function (r1, r2) {
//     return -(r1.avg - r2.avg);
// });

var tbody=document.querySelector("tbody");
//var thgenre=document.querySelector("#genre1");
//var thavgticket=document.querySelector("#text-right");

function createTableCell(value){
    var td=document.createElement("TD");
    td.textContent=value;
    return td;
}

function addRow(record){
    var tr=document.createElement("TR");
    tr.appendChild(createTableCell(record.genre));          
    tr.appendChild(createTableCell(numeral(record.avg).format('$ 0.00 a')));
    tbody.appendChild(tr);
}

function populateTable(){
    tbody.innerHTML="";
    Arr.forEach(addRow);
}

function compareByLE(r1,r2){
    return -(r1.avg-r2.avg);
}

Arr.sort(compareByLE);

populateTable();

var distinctATs={};
movies.forEach(function(record){
    //console.log(record.income_group);
    var stats=distinctATs[record.rating];
    if(undefined==stats){
        stats={sum:0,count:0};
        distinctATs[record.rating]=stats;
    }
    
    stats.sum+=record.tickets;
    stats.count++;
   
});

console.log(distinctATs);


var keys=Object.keys(distinctATs);
keys.forEach(function(key){
    var stats=distinctATs[key];
    var avg=stats.sum/stats.count;
    console.log("%s=%d",key,avg);
});

