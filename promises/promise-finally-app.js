console.log("Hola desde promise-finally-app.js");

//El metodo finally se ejecuta hasta que se hayan ejecutado todas las promesas.
//En caso que una de ellas haya terminado con errores, pasara directamente al metodo finally
let promesax = new Promise((resolve)=>{
    setTimeout(resolve, 1000, 5);
});

promesax.then(value=>{
    console.log("primer valor: ", value);
    return value + value;
}).then(value=>{
    console.log("segundo valor", value);
    throw new Error("Huy, hubo un error!")
}).then(value => {
    console.log("no hago nada");
}).finally(()=>{
    console.log("Igual me ejecuto,porque ya todo termino");
}).catch(error=>{
    console.log("Esperen, hace falta el catch", error);
})

