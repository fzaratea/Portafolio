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
        this.velocidad += 1;
    }

}

var coche1 = new coche('BMW',200, 2017);