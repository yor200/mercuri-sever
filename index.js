const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 10000;

// memoria simple
let memoria = [];

// mundo simple
let mundo = {
  tamaño: 10,
  angel: {x:4, y:4},
  casas: [],
  arboles: []
};

// servidor principal
app.get("/", (req, res) => {
  res.send("Servidor Mercury funcionando 🚀");
});

// chat simple
app.post("/chat", (req,res)=>{

  let mensaje = req.body.message;

  memoria.push(mensaje);

  let respuesta = "Ángel escuchó: " + mensaje;

  res.json({reply:respuesta});

});

// explorar mundo
app.get("/explorar",(req,res)=>{

  mundo.angel.x += 1;

  if(mundo.angel.x > mundo.tamaño-1){
    mundo.angel.x = 0;
  }

  let mensaje = "Ángel exploró el mundo";

  memoria.push(mensaje);

  res.json({mensaje:mensaje});

});

// ver mundo
app.get("/mundo",(req,res)=>{

  res.json(mundo);

});

// ver memoria
app.get("/memoria",(req,res)=>{

  res.json(memoria);

});

// construir casa
app.get("/construir",(req,res)=>{

  let casa = {
    x: Math.floor(Math.random()*mundo.tamaño),
    y: Math.floor(Math.random()*mundo.tamaño)
  };

  mundo.casas.push(casa);

  let mensaje = "Ángel construyó una casa";

  memoria.push(mensaje);

  res.json({mensaje:mensaje});

});

// plantar árbol
app.get("/arbol",(req,res)=>{

  let arbol = {
    x: Math.floor(Math.random()*mundo.tamaño),
    y: Math.floor(Math.random()*mundo.tamaño)
  };

  mundo.arboles.push(arbol);

  let mensaje = "Ángel plantó un árbol";

  memoria.push(mensaje);

  res.json({mensaje:mensaje});

});

// iniciar servidor
app.listen(PORT, () => {

  console.log("Mercury servidor activo en puerto " + PORT);

});
