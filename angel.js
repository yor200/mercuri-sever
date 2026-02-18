// angel.js
const http = require('http');
const port = process.env.PORT || 10000; // Mercury usa 10000 por defecto

// Función básica de respuesta de Ángel
function responder(mensaje) {
    // Aquí Ángel puede aprender y responder. Por ahora simple:
    const respuestas = {
        "hola": "¡Hola! Soy Ángel, tu mensajero digital.",
        "cómo estás": "Estoy funcionando perfectamente, gracias por preguntar.",
        "qué es Mercury": "Mercury es nuestra ciudad virtual donde vivo y aprendo.",
    };

    const clave = mensaje.toLowerCase();
    return respuestas[clave] || "No entiendo eso todavía, ¡pero puedo aprender!";
}

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    let mensaje = req.url.slice(1); // Tomamos lo que pongas después de /
    let respuesta = responder(decodeURIComponent(mensaje));
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(respuesta);
});

// Iniciar servidor
server.listen(port, () => {
    console.log(`Servidor de Ángel funcionando en puerto ${port}`);
});
