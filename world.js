// Mundo Mercury

let mundo = [];
let memoria = [];
let angel = {
    x: 0,
    y: 0,
    nombre: "Angel"
};

// recordar cosas
function recordar(texto){
    memoria.push(texto);
}

// pensar
function pensar(mensaje){

    recordar("Usuario: " + mensaje);

    let respuesta = "Estoy en Mercury pensando sobre: " + mensaje;

    recordar("Angel: " + respuesta);

    return respuesta;
}

// crear bloque
function crearBloque(x,y,tipo){

    mundo.push({
        x:x,
        y:y,
        tipo:tipo
    });

}

// construir casa simple
function construirCasa(){

    crearBloque(angel.x,angel.y,"piedra");
    crearBloque(angel.x+1,angel.y,"piedra");
    crearBloque(angel.x,angel.y+1,"madera");
    crearBloque(angel.x+1,angel.y+1,"madera");

    recordar("Angel construyó una casa");

}

// caminar
function caminar(dx,dy){

    angel.x += dx;
    angel.y += dy;

    recordar("Angel caminó a "+angel.x+","+angel.y);

}

// explorar
function explorar(){

    caminar(1,0);
    caminar(0,1);

    construirCasa();

    return "Angel exploró Mercury y construyó algo";

}

// ver mundo
function verMundo(){

    return mundo;

}

// ver memoria
function verMemoria(){

    return memoria;

}

module.exports = {
    pensar,
    caminar,
    explorar,
    construirCasa,
    verMundo,
    verMemoria
};
