"use strict"

/*
 todo :Escribe un programa que determine si un año es bisiesto.
 todo Un año es bisiesto si es divisible por 4, pero no es divisible por 100,
 todo  a menos que también sea divisible por 400.
*/
let year;
let bisiesto;// 2024
year = +prompt("Dime un año");
if(year%4===0 && year%100!==0 || year%400===0){
 bisiesto=true;
}
bisiesto===true? alert ("¡Es bisiesto!"):alert("¡No es bisiesto!"); // ! rarete no gente?
/*
* segunda forma
*/
let year2=+prompt("dime un año 2")
let bisiesto2 = (year2%4===0)? true : (year2%100!==0&&year2%400===0)? true : false;
bisiesto2===true? alert ("¡Es bisiesto2!"):alert("¡No es bisiesto2!"); // ! rarete no gente?
/*
Dado el siguiente código, ¿cuál es el resultado de console.log?:

let a = 1, b = 1;

let c = ++a;  se incrementa antes del igual

let d = b++; se incrementa despues del igual

console.log(c,d,b); 
! resultado: c=2,d=1,b=2
 */
/*
¿Cuáles son los valores de ‘z’ y ‘x’ después del código a continuación?

let z = 2;

let x = 1 + (z *= 4); z*=4 => 2*4 = 8| 1+8 = 9
! resultado: z=8,x=9
*/
/*
¿Cuál es el resultado de la siguiente operación?

alert(null && -1 && 1 || undefined); los && escogen siempre el primer valor falso
al final se queda en un null|| undefinded en el que esta vez los || escogen el segundo valor false

! resultado: undefined
*/
/*
¿Cuál es el resultado de la siguiente operación?

(“”+6 > ”7”) ? “genial” : “fatal”;  6 menor que 7 
! resultado: fatal
*/
/*
Indica cómo puedes arreglar el siguiente código para que la condición siempre se cumpla:

If(0){ alert(“es cierto”);

}

a) Usando parseString
b) Usando ` `
c) Usando +
d) Usando `${0}` 
! (d)
*/
/*
¿Cuál es el resultado de la siguiente operación?

alert(Number("    ") === Number("")) debido al number,0 === 0
! true
*/
