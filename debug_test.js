"use strict"
let i = 0;
for (; i<=100; i=i+2) { // ! debugger forma antigua
    console.log(i);
}
hello("Manuel");
function hello (name){
     let holahola =`hi ${name}`;
        say(holahola);
    }
function say (frase){
    alert(`__${frase}_;_`)
}