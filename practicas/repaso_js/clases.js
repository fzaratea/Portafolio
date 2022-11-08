class coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }

}

var coche1 = new coche('BMW',280, 2017);
var coche2 = new coche('Audi', 260, 2018);
var coche3 = new coche('Mercedes', 230, 2016);
var coche4 = new coche('Reault', 180, 2008);

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();