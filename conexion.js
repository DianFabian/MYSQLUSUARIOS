var Sequelize = require("sequelize");
var UsuarioModelo= require("./modelos/usuarios");
require("dotenv").config();

var db =  process.env.DB_MYSQL;
var usuario =  process.env.USUARIO_MYSQL;
var password =  process.env.PASSWORD_MYSQL;
var host = process.env.HOST_MYSQL;
var port =  process.env.PORT_MYSQL;

var conexion = new Sequelize(db, "1kfxg5gqm6gem62k3s3x", "pscale_pw_GCYMrIFr23WnAgHgLyJtgN6MKXE034ljZ8bTDBjXVQC", {
    host:host,
    port:port,
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            rejectUnauthorized:true
        }
    }
});


var Usuario = UsuarioModelo(conexion);

conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MYSQL");
});
