/* Tipos de variables*/
// let name="Armando";
// console.log("El tipo de name es: ",typeof name);
// let age=18;
// console.log("El tipo de name es: ",typeof age);
// let active=true;
// console.log("El tipo de name es: ",typeof active);
// /*Conversiones numericas */
// let alter=parseInt(prompt("Ingrese su edad"));
// if (isNan(alter)){
//     alert("Digite un numero");
// }
// else{
//     alert("Su edad es: "+alter);
// }
/* Exercise 1:Mostrar la sumatoria y la media de los numeros
introducidos por panatalla hasta que el numero sea negativo */
// let sum=0;
// let average=0;
// let count=0;
// let num=25;
// //let num=parseInt(prompt("Ingrese un numero"));
// debugger;
// while (num>0){
//      num=parseInt(prompt("Ingrese un numero"));
//     if(!isNaN(num) && num>=0){
//          sum+=num;
//          count++
//     }
// }
// average=sum/count;
//  alert("La sumatoria es igual a: "+sum+"El promedio es igual a: "+average);
/*Exercises 2:Mostrar todos los numeros que hay entre un rango inicial y
 un rango final suministrado por el usuario */
//  let iRank=parseInt(prompt("Digite el rango inicial"));
//  let fRank=parseInt(prompt("Digite el rango final"));
//  if (!isNaN(iRank) && !isNaN(fRank) && iRank>0 && fRank>0 &&iRank<fRank) {
//     document.write("<h1> De "+iRank+" Hasta " +fRank+" Existen los siguientes numeros pares: </h1>");
//     for (let index = iRank; index <=fRank; index++) {
//         if (index%2==0) {
            
        
//         console.log("Los numeros son los siguientes",index);
//         document.write("<b>"+index+"</b>"+"<br>");
//         }
//     }
// }
// let number=parseInt(prompt("Digite un numero"));
// // debugger;
// for (let index = 0; index <=number; index++){
// if (!isNaN(number) && (number%index==0)) {
//     document.write("<h1> "+index+" Es divisor de 10: </h1>");
// }else{
//     document.write("<h1> "+index+" No es divisor de 10: </h1>");
// }
// }
// let number=parseInt(prompt("Ingrese un numero"));
// while (isNaN(number)){
//     alert("ingrese un numero ");
//      number=parseInt(prompt("Ingrese un numero"));
// };
var name=prompt("ingrese el nombre de su usuario");
var contraseña=prompt("ingrese su contraseña");
while (name!=("Dayana")){
    alert("Verifique que nombre de usuario este escrito correctamente");
    name=prompt("ingrese el nombre de su usuario");
    alert("contraseña incorrecta");
    contraseña=prompt("ingrese su contraseña");
};

var count=0;
do{
    alert("contraseña incorrecta");
    contraseña=prompt("ingrese su contraseña");
    count=5;
}while(contraseña!=123456);
 document.write("<h1> welcome dayana </h1>");
 if (name==("Dayana")&& contraseña===123456){
    alert("Hola Dayana");
};
