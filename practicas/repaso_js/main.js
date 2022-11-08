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

//objetos json o literales

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    //mostrar datos en consola del navegador
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);

//promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buen día a todos!!!";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 3000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});