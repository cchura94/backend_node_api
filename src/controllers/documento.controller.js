const { QueryTypes } = require("sequelize");
const sequelize = require("../models/conexion");
const Documento = require("./../models/Documento");


async function listarDocumento(req, res){
    const documentos = await Documento.findAll();
    // const personas = await sequelize.query("SELECT * FROM personas", {
    //     type: QueryTypes.SELECT,
    //   });

    return res.json(documentos);
}

async function guardarDocumento(req, res){
    const datos = req.body;
    
    const nuevoDocumento = await Documento.create(datos)

    return res.status(201).json({mensaje: "Documento Registrado", documento: nuevoDocumento})
}

async function mostrarDocumento(req, res){
    const id = req.params.id;
    const doc = await Documento.findByPk(id);

    if(!doc){
        return res.status(404).json({error: "DOcumento no encontrado"})
    }

    return res.json(doc);
    
}

async function modificarDocumento(req, res){
    const { id } = req.params;
    const doc = await Documento.findByPk(id);

    if(!doc){
        return res.status(404).json({error: "Documento no encontrado"})
    }
    await doc.update(req.body);
    return res.json(doc)
}

async function eliminarDocumento(req, res){
    const { id } = req.params;
    const doc = await Documento.findByPk(id);

    if(!doc){
        return res.status(404).json({error: "Documento no encontrado"})
    }
    await doc.destroy();
    return res.json({mensaje: "Documento eliminado"})
}

module.exports = {
    listarDocumento,
    guardarDocumento,
    mostrarDocumento,
    modificarDocumento,
    eliminarDocumento
}