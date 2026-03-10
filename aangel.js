let memoria = [];

function pensar(mensaje){

memoria.push("Usuario: " + mensaje);

let respuesta = "Hola, soy Ángel, el mensajero de Mercury. Dijiste: " + mensaje;

memoria.push("Angel: " + respuesta);

return respuesta;

}

module.exports = { pensar };
