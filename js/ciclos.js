//Ciclos
let nombre=prompt("Ingrese su nombre");
let red=prompt("Ingrese el numero de repeticiones");
for (let index = 0; index <=red; index++) {
    console.log(index);
}
/* Leer 10 numeros por teclado e imprimer si son pares
 y si es multiplo de 3*/
for (let index = 0; index <red; index++) {
    let numer=prompt("Ingrese el numero de repeticiones");
    let result=numer%2;
    if (result==0) {
        console.log(numer,"El numero es par");
    }else if(total==0){
        console.log(numer,"El numero es multiplo de 3");
    }
    let total=numer%3;
};
//Ciclo while
/*Realizar la sumatoria de los numeros ingresados por pantalla cuando el
 numero sea igual a cero me debe imprimir el resultado de la sumatoria */
 let escala=prompt("Ingrese el numero");
 let sum=0;
 while(escala!=0){
     sum=sum+escala;
    escala=prompt("Ingrese el numero ");
 }
 console.log("la sumatoria de todos los numeros es:  ",sum);
 let sum=0;
 do {
    let nummer=prompt("Ingrese el numero");
    sum+=nummer;
 } while (nummer!=0);