
console.log ("Buenos días, soy el código del archivo externo del html")

console.log ('Buenos días, soy el código del archivo externo del html');

//Variebles 
//Palabras reservadas
var nombre;

nombre = "Gabriel";
console.log ("Mi nombre es: " + nombre);

let apellido = "Quispe";
console.log ("Mi apellido es: " + apellido);


const provincia = "Salta";
const DNI = 123456789;
const PI=3.14;

var nombre = "Pepe";
apellido = "Sanchez";

console.log ("Mi nombre es ${nombre} y mi apellido es ${apellido} y vivo en ${provincia}");

//datos de entrada
let persona = prompt ("Ingresa tu nombre: ")
alert ("Bienvenido " + persona);

let numero = parseInt (prompt ("Ingresa un numero: "));

let numeroDos = parseInt(prompt ("Ingresa otro numero: "));

let resultado = (numero + numeroDos);
alert ("El resultado de la suma es: "  + resultado)

let a = 100;
let b = 150;
console.log(a + b);

let usuario = prompt ("Ingresa tu usuario: ");
let pass = parseInt (prompt ("Ingresa tu password numérico: "));

if (usuario == "admin" && pass == 1234){
alert ("Bienvenido Administrador")
} else {
    alert("Usuario o password incorrecta")
}

