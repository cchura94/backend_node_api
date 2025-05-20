const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./conexion");

const Persona = sequelize.define(
  'Persona',
  {
    // Model attributes are defined here
    nombres: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(50),
    },
    ci_dni: {
        type: DataTypes.STRING(20)
    },
    foto_perfil: {
        type: DataTypes.STRING(200)
    },
    correo: {
        type: DataTypes.STRING(255)
    },
    clave: {
        type: DataTypes.STRING(255)
    },
    telefono: {
        type: DataTypes.STRING(25)
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    genero: {
        type: DataTypes.STRING(20)
    },
  },
  {
    // Other model options go here
  },
);

Persona.sync()
module.exports = Persona;