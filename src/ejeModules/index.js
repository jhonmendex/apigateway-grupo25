//experimental modules con ecmamodules
//import { suma, resta, multiplicacion } from "./ejeModules/operaciones.mjs";
//import { express } from "express";
//modulos de node
const operacion = require("./operaciones");

console.log(operacion.suma(1, 2));

//const app = express();
/*
app.get("/suma/:numero1", (req, res) => {
  res.send("la suma es " + operacion.suma(req.params.numero1, 2));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("servidor en funcionamiento en el puerto " + PORT);
}); */
