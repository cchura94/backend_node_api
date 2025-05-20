const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./conexion");
const Persona = require('./Persona');

const Documento = sequelize.define(
  'Documento',
  {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(100),
    },
    archivo: {
        type: DataTypes.STRING(255)
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    personaId: {
        type: DataTypes.INTEGER
    },
  },
  {
    // Other model options go here
  },
);

Documento.sync()

Documento.belongsTo(Persona);
Persona.hasMany(Documento);

module.exports = Documento;