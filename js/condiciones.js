/* Realizar un script que pida al usuario dos numeros que diga cual es mayor de los numeros
 si los numeros son iguales*/
// /*  var numero1=prompt("Digite el primer numero");
//  let numero2=prompt("Digite el segundo numero");
// if (numero1>numero2) {
//    console.log("el numero mayor es ",numero1)
// } else if (numero1<numero2){
//     console.log("El numero menor es ",numero2)
// }
// else if(numero1==numero2){
//     console.log("los numeros son iguales")
// } 
// /*ingresar por pantalla la edad de una persona si
//  la persona es mayor a 18 años indicar es mayor de edad 
//  de lo contrario indicar que es menor de edad 
//  si tiene la edad menor o igual a 33 eres milenial
//  si es mayor o rigual a 70 eres una ancianito/a
//  y si es mayor o igual a 33 ya no eres milenial*/
//  let Nombre=prompt("Ingrese su nombre");
//  let Eda=prompt("Ingrese su edad");
//  function Calcularedad(Edad)
//  {
//  if (Edad>=18) {
//     console.log(Nombre,"Tu edad es ",Edad,"eres mayor de edad")
//  } else if(Edad<18) {
//     console.log(Nombre,"Tu edad es ",Edad,"Eres menor de edad")
//  } else if(Edad>=70){
//     console.log(Nombre,"Tu edad es ",Edad,"Eres un ancianito/a")
//  }
//  if (Edad<=33) {
//     console.log(Nombre,"Eres milenial")
//  } else if(Edad>33){
//     console.log(Nombre,"Ya no eres milenial")
//  }
// }
// debugger;
//  Calcularedad(Eda);
//  Calcularedad(23);
//  Calcularedad(70); */
/*Operadores de comparacion*/
let a=5;
let b=5;
if (a==b){
    console.log("A y B son iguales");
};
if (a===b) {
    console.log("A y B son iguales en tipo y en valor")  
} else {
    console.log("Ay B no son iguales en tipo y en valor")
};
/* Operador ternario*/
let aux=5;
if (a==b) {
    console.log(aux)
} else {
    let aux=10;
    console.log(aux)
};
var resul=a==b?10:20;
    console.log(resul);
let year=prompt("Ingrese el año");
let anio= year!= 2018? false:true;
    console.log(anio);
    /* Switch*/
let day=prompt("Ingrese un dia de la semana");
    //debugger;
    function SetDay(days){
    switch(day){
        case "saturday":
            console.log("go the movie");
        break;
        case"domingo":
            console.log("Voy hacer deporte");
        break;
        case"monday":
            console.log("voy a trabajar");
        break;
        default:
        console.log("No es un dia valido");
    };
};
SetDay(day);
    SetDay("Domingo");
    SetDay(5);