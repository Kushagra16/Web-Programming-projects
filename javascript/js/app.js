// alert("Hello");

var n=5;
var s="Hello World!";
var b=true;
// var u=undefined;

b=!b;

//sayHello   Camel
//say_hello  Snake casing

function sayHello(name){
    console.log("Hello "+ name);
}
sayHello("Kush");
    
function square(n){
    return n*n;
}

function areaCircle(radius){
    return Math.PI * square(radius);
}

function iseven(n){
    return (n%2) ==0;
}
console.log(iseven(5));
//console.log(areaCircle(50));

console.log("Iteration "+ 7);

// String " " and ' ' both are legal

var ar=["G","PG","PG-13","R"];
console.log(ar.length);
ar.push("NC-17");
console.log(ar[4]);

ar.forEach(function(rating){
    console.log(rating);
});

// MAP (OBJECTS)
var m={"red":"#F00", "green":"#0F0","blue":"#00F"};
console.log(m);
console.log(m.red);
console.log(m.yellow);
m.yellow="#FF0";
console.log(m);
