const dbcategoria = require('./dbcategoria');  //permite usar las funciones de dbcategoria

//inicializar modulos requeridos siempre
var express = require('express');  //inicializamos la libreria express
var bodyParser = require('body-parser'); //lo llamamos y viene del archivo package.json
var cors = require('cors'); 
const { request, response } = require('express');
var app = express();
var router = express.Router();

//esto se usa para los POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router); //crear una ruta principal, se llamara api

 // llamar a la funcion get categoria (nos permitira inicializarlo en postman), la ruta se va llamar categoria
router.route('/categoria').get((request,response)=>{
dbcategoria.getCategoria().then(result=> {
    response.json(result[0]);  //para que nos arroje de respuesta todo el arreglo
})
})

 


