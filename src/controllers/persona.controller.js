const { QueryTypes } = require("sequelize");
const sequelize = require("../models/conexion");
const Persona = require("./../models/Persona");
const Documento = require("../models/Documento");


async function listarPersona(req, res){
    const personas = await Persona.findAll({
        include: {
            model: Documento,
            // as: 'documentos'
        }
    });
    // const personas = await sequelize.query("SELECT * FROM personas", {
    //     type: QueryTypes.SELECT,
    //   });

    return res.json(personas);
}

async function guardarPersona(req, res){
    const datos = req.body;
    
    const nuevaPersona = await Persona.create(datos)

    return res.status(201).json({mensaje: "Persona Registrada", persona: nuevaPersona})
}

async function mostrarPersona(req, res){
    const id = req.params.id;
    const persona = await Persona.findByPk(id);

    if(!persona){
        return res.status(404).json({error: "Persona no encontrada"})
    }

    return res.json(persona);
    
}

async function modificarPersona(req, res){
    const { id } = req.params;
    const persona = await Persona.findByPk(id);

    if(!persona){
        return res.status(404).json({error: "Persona no encontrada"})
    }
    await persona.update(req.body);
    return res.json(persona)
}

async function eliminarPersona(req, res){
    const { id } = req.params;
    const persona = await Persona.findByPk(id);

    if(!persona){
        return res.status(404).json({error: "Persona no encontrada"})
    }
    await persona.destroy();
    return res.json({mensaje: "Persona eliminada"})
}

module.exports = {
    listarPersona,
    guardarPersona,
    mostrarPersona,
    modificarPersona,
    eliminarPersona
}