//antes node -v, npm init -y , npm install en la terminal

// funciones necesarias para el CRUD
var config = require('./dbconfig');  //instanciamos el archivo dbconfig
const sql = require('mssql'); // se necesita paquete mssql

//duncion async: asincrona ya que devuelve un objeto
async function getCategoria(){
    try {
        let pool = await sql.connect(config); //espera la conexion del archivo config
        let categorias = await pool.request().query("SELECT * FROM TM_CATEGORIA");  //trae el resultante del select
        return categorias.recordsets; //retorna la respuesta con un recordsets para que la recorra

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoria : getCategoria
}