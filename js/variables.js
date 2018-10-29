//***Pedir datos por teclado*/

var nombre=prompt("Ingrese su nombre");
console.log("Este es mi nombre",nombre);
alert(nombre);
//**variables numericas */
var Edad=prompt("Ingrese su edad");
console.log("Esta es su edad",Edad);
var num=5;
console.log("num",num);
//**Variables de texto */
var palabras="palabras";
console.log("palabras",palabras);
//** Variables booleanas*/
var activo=true;
console.log("activo",activo);
//**Variables tipo arreglo*/
var colores=["red","cyan",activo,num];
console.log("colores",colores);
//**Variables tipo objeto u objet */
var vehiculo={
            tipo:"Automovil",
            modelo:2018,
            usado:true
};
console.log("vehiculo",vehiculo);
console.log("Tipo vehiculo",vehiculo.tipo);

var nombre="Andres";
console.log("nombre",nombre);
nombre=true;
console.log("nombre",nombre);
nombre=20;
console.log("nombre",nombre);
//**Diferencias entre var let */
var apellido="esperanza";
console.log("apellido",apellido);
apellido=14;
console.log("apellido",apellido);
if(true){
    apellido="nature";
    console.log("apellido dentro del if",apellido)
};
console.log("apellido fuera del if",apellido);
var cantidad="14";
console.log("cantidad",cantidad);
if(true){
    let cantidad=18;
    console.log("cantidad dentro del if",cantidad);
}
console.log("catidad fuera del if",cantidad);
//**constantes */
const edad1=15;
console.log("constantes edad",edad1);
//**Concatenacion de variables */
let anio=2020;
let promedio="25";
console.log("la concatenacion de "+anio+" y "+promedio+" es ",anio+Number(promedio));
var numero1=10;
var numero2=20;
console.log("la concatenacion de  ", String (numero1)+ String (numero2));
//**Ventanas */
//**alertas */
alert("la concatenacion de  " +String (numero1)+ String (numero2));
//** */prompt*/
var modelo=prompt("El modelo del carro es  ",2018);
//**conf */
var conf= confirmar("Desea salir de la aplicaion ");
console.log("confirmar",conf);