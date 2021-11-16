
const express = require('express');  //importar el modulo de express

const server=express();       //crear una instancia de express


// 
    server.post('/Aprenndizsaludo',(peticion,respuesta)=>{

        respuesta.send("hola desde la ruta aprendizsaludo")

    });



    server.listen(8082,()=>{
         
        console.log("el serviddor se esta ejecutando en el puerto 8082");
    });






















// mandar datos por el metodo post con el json
// server.post('/',(peticion,respuesta)=>{

//     respuesta.status(404);

//     var datos={
//         "nombre":"yheison stiven",
//         "edad":"18",
//         "fecha_nacimiento":"28-12-2002"
//     }
//     respuesta.json(datos);
//     respuesta.end();

// });







    //metodo get es para consulatar 

// server.get('/' ,(peticion , respuesta)=>{
//     respuesta.send('hola aprendises desde express con el metodo get');
// });
// metodo post para enviar datos 

// server.post('/',(peticion,respuesta)=>{
//     respuesta.send('<h1>hola desde el metodo post con express</h1>');
// });


    // metodo put es para consultar

// server.put('/',(peticion,respuesta)=>{
//     respuesta.send('hola desde el metodo put con express');
// });

    // metodo delete es para eliminar

// server.delete('/',(peticion,respuesta)=>{
//     respuesta.send('hola desde el metodo delete con express');
// });

    //  que el servidor me escuche y que me de respuesta es el primer paso a seguir

