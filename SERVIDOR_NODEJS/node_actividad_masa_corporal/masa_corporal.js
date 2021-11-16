const express = require('express');     //inportar el modulo de express
const  bodyparser =require('body-parser');  //inportar el modulo body parcer
const { text } = require('express');
const server=express();      // crear una instancia de express 
server.use(bodyparser.urlencoded({extended:false}));    //llamamos el servidor que vasmos a utilizar para realiazar la acdtividad atraves de la url
server.use(bodyparser.json());  //llamamos a la constancia body parser para que funcione en el tunder client que es el que utrilizamos para el desarrollo de la actividad 
server.post('/calcular',(peticion,respuesta)=>{     //generamos el metodo de envio en este caso es por el metoso post que es para envio con una funncion "/calcular "

    var nombre= peticion.body.nombre;           //creamos las variables para pedir lo  nesesario para realizar nuiestro ejercicio en este caso son nombre peso y estatura
    var peso = parseFloat(peticion.body.peso);      // como vienen en el metodo texto por defcto entonces lo pasamos a numerico con el parcefloat  al igual con la estatura 
    var estatura = parseFloat(peticion.body.estatura);

    var resultado = (peso/(estatura*estatura));     //hacemos ña ecuacion que es peso DIVIDIDO por ESTATURA elevado al CUADRADO y de la siguiente manera hice el ejercicio luegp nos pide unos requerimientos que si el IMC es menor a 18.5 arroje un mensaje que diga por debajo de peso  
    if (resultado <= 18.5) {
        respuesta.send('hola '+nombre +' por debajo de peso...' + resultado)
    }
    if (resultado >= 18.5 && resultado <= 24.9) {
        respuesta.send('hola '+nombre +' saludable..' + resultado)
    }
    if (resultado >= 25.0 && resultado <= 29.9) {
        respuesta.send('hola '+nombre +' sobrepeso..' + resultado)
    }
    if (resultado >= 30.0 && resultado <= 39.9) {
        respuesta.send('hola '+nombre +' obeso..' + resultado)
    }
    if (resultado > 40) {
        respuesta.send('hola '+nombre +' obesidad morbia..' + resultado)
    }

});


server.listen(2002,()=>{        // con esta funcion hago que el servidor siempre este escuchando entoces si eso se cumple me diga el siguiente mensaje |
    //¬
    console.log('el servidor se esta ejecutando correctamente');
});