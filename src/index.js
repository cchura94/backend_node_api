const express = require("express");
var cors = require('cors')
const rutas = require("./routes/index");

const app = express();
app.use(cors())
const PORT = 3000;

// req.body
app.use(express.json());

app.get("/saludo", function(peticion, respuesta){
    respuesta.send("Hola Mundo desde Node.js...");
});

// rutas (CRUD)
app.use("/api", rutas);

app.listen(PORT, function(){
    console.log("Servidor levantado en: http://127.0.0.1:"+PORT)
});