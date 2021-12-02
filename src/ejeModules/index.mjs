//experimental modules con ecmamodules
import { suma, resta, multiplicacion } from "./ejeModules/operaciones.mjs";
import express from "express";
//modulos de node
const operacion = require("./ejeModules/operaciones");

const app = express();

app.get("/suma/:numero1", (req, res) => {
  console.log("la suma es ", operacion.suma(req.params.numero1, 2));
  res.send("la suma es " + suma(req.params.numero1, 2));
});

app.get("/resta", (req, res) => {
  console.log("la suma es ", resta(1, 2));
});

app.get("/persona", (req, res) => {
  res.json({
    nombre: "jhon",
    apellido: "mendez",
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("servidor en funcionamiento en el puerto " + PORT);
});
