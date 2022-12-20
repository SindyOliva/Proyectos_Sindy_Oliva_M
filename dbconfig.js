const config={
    user:"sa",
    password:"12345678",
    server:"SINDY-MARISOL", // 169.254.187.166", "(local)", 
    database:"BDTEST2",
    options:{
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false,
        instancename: "/SQLEXPRESS"
    }
}
module.exports = config; //nos permite usar esta configuracion en los demas archivos js
