const express = require("express");
const cors = require("cors");

const angel = require("./angel");
const world = require("./world");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 10000;


// pagina principal
app.get("/", (req, res) => {
  res.send("Servidor Mercury funcionando 🚀");
});


// chat con angel
app.post("/chat", (req, res) => {

  const mensaje = req.body.message;

  let respuesta = angel.pensar(mensaje);

  res.json({ reply: respuesta });

});


// angel explora el mundo
app.get("/explorar", (req,res)=>{

  let resultado = world.explorar();

  res.json({mensaje:resultado});

});


// ver mundo
app.get("/mundo",(req,res)=>{

  res.json(world.verMundo());

});


// ver memoria
app.get("/memoria",(req,res)=>{

  res.json(world.verMemoria());

});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
