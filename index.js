// index.js - Código Ray - Servidor Mercury
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (mapa, scripts, HTML)
app.use(express.static(path.join(__dirname)));

// Puerto
const PORT = process.env.PORT || 3000;

// ======= Datos del mundo =======
let world = {
    tamaño: 10, // 10x10 celdas
    angel: { x: 4, y: 4 },
    casas: [],
    arboles: [],
    rios: [],
    montañas: [],
    memoria: []
};

// Función para generar mundo inicial
function generarMundo(){
    world.casas = [{x:1,y:1},{x:8,y:2}];
    world.arboles = [{x:3,y:3},{x:6,y:5}];
    world.rios = [{x:0,y:5},{x:1,y:5},{x:2,y:5},{x:3,y:5}];
    world.montañas = [{x:9,y:0},{x:9,y:1}];
}
generarMundo();

// ======= Rutas =======

// Raíz
app.get("/", (req,res)=>{
    res.send("Servidor Mercury funcionando 🚀");
});

// Explorar el mundo
app.get("/explorar", (req,res)=>{
    let resultado = `Ángel está en x:${world.angel.x}, y:${world.angel.y}`;
    res.json({mensaje:resultado});
});

// Obtener el mundo actual (mapa)
app.get("/mundo", (req,res)=>{
    res.json({
        angel: world.angel,
        casas: world.casas,
        arboles: world.arboles,
        rios: world.rios,
        montañas: world.montañas
    });
});

// Mover Ángel
app.post("/mover", (req,res)=>{
    const {dx,dy} = req.body;
    world.angel.x = Math.max(0, Math.min(world.tamaño-1, world.angel.x + dx));
    world.angel.y = Math.max(0, Math.min(world.tamaño-1, world.angel.y + dy));
    res.json({angel: world.angel});
});

// Construir casa
app.post("/construir", (req,res)=>{
    const {x,y} = req.body;
    world.casas.push({x,y});
    res.json({mensaje:`Casa construida en x:${x}, y:${y}`});
});

// Plantar árbol
app.post("/arbol", (req,res)=>{
    const {x,y} = req.body;
    world.arboles.push({x,y});
    res.json({mensaje:`Árbol plantado en x:${x}, y:${y}`});
});

// Guardar memoria
app.post("/memoria", (req,res)=>{
    const {evento} = req.body;
    world.memoria.push({evento, fecha: new Date()});
    res.json({mensaje:"Evento guardado en memoria"});
});

// Chat con Ángel (básico)
app.post("/chat", (req,res)=>{
    const {message} = req.body;
    let reply = `Ángel dice: recibí "${message}"`;
    res.json({reply});
});

// Reiniciar mundo
app.post("/reiniciar", (req,res)=>{
    generarMundo();
    res.json({mensaje:"Mundo reiniciado"});
});

// ======= Funciones futuras para el mundo =======
// Aquí podemos agregar más rutas y funciones, por ejemplo:
// - Crear ríos dinámicos
// - Agregar bloques especiales
// - Animaciones de viento y nubes
// - Inteligencia de Ángel (exploración automática)
// - Interacción con otras IA
// - Eventos y misiones
// - Registro de construcciones
// - Guardado y carga de mundos
// - Etc.

app.listen(PORT, ()=>{
    console.log(`Servidor Ray corriendo en puerto ${PORT}`);
});
