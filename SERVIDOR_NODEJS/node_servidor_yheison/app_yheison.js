const express = require('express'); //inportar el modulo de express
const bodyparser=require('body-parser'); //inportar el modulo body parcer

const server=express(); // crear una instancia de express 


server.use(bodyparser.urlencoded({extended:false}));    //datos de un formulario
server.use(bodyparser.json());  //datos en formato json
server.post('/sumar',(peticion,respuesta)=>{

    var n1 = parseInt( peticion.body.n1);  // declaramos las variables que utilizamos en el json para luego mostrarla en pantalla
    var n2 = parseInt( peticion.body.n2);

var resultado = n1+n2;

    respuesta.send("el resultado de la suma es: " +resultado);
});
/*  */





// server.post('/saludo/yheison',(peticion,respusta)=>{
//         respusta.send("hola yheison stiven como esta");
// });


server.listen(2002,()=>{
    console.log("el servidor se esta ejecutando en el 2002");
});