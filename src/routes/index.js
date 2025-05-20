const express = require("express")
const personaController = require("./../controllers/persona.controller");
const documentoController = require("./../controllers/documento.controller");

const Router = express.Router();

Router.get("/persona", personaController.listarPersona); // Listar
Router.post("/persona", personaController.guardarPersona); // Guardar
Router.get("/persona/:id", personaController.mostrarPersona); // Mostrar
Router.put("/persona/:id", personaController.modificarPersona); // Modificar
Router.delete("/persona/:id", personaController.eliminarPersona); // Eliminar

Router.get("/documento", documentoController.listarDocumento); // Listar
Router.post("/documento", documentoController.guardarDocumento); // Guardar
Router.get("/documento/:id", documentoController.mostrarDocumento); // Mostrar
Router.put("/documento/:id", documentoController.modificarDocumento); // Modificar
Router.delete("/documento/:id", documentoController.eliminarDocumento); // Eliminar

module.exports = Router;