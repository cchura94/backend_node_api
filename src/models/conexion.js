const Sequelize = require("sequelize");

const sequelize = new Sequelize('bd_node_api_documentos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testConexionBD(){
    try {
        await sequelize.authenticate();
        console.log('CONEXION CORRECTA CON BASE DE DATOS.');
      } catch (error) {
        console.error('ERROR DE CONEXION CON BASE DE DATOS:', error);
      }
}

testConexionBD();

module.exports = sequelize