// para mostrar mensaje al abrir la pagina
alert ('Hola mundo!!!... Bienvenido');
//declaracion de variables
var nombre = "Fredy Zárate";
var altura = 168;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;
//condicionales
if(altura >= 190){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}
//bucles
for(var i = 2000; i<=2022; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}