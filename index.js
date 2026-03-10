const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("Servidor Mercury funcionando 🚀");
});

app.post("/chat", (req, res) => {

  const mensaje = req.body.message;

  let respuesta = "Hola, soy Ángel. Estoy aprendiendo contigo en Mercury.";

  res.json({reply: respuesta});

});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
