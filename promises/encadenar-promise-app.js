console.log("Hola desde encadenar-promise-app.js");

let solvingPromise = (resolve, reject)=>  {
    setTimeout(resolve, 1000, 5)
};

const promiseChaining = new Promise(solvingPromise);

promiseChaining.then(primerValor=>{
    console.log("El primer valor es: ", primerValor);
    //El return dentro de un then siempre nos va a devolver una promesa
    return primerValor + primerValor;
})
//El segundo valor va a recibir el valor del primer then.
.then(segundoValor => {
    console.log("El segundo valor es: ", segundoValor);
    //Forzamos el error para que lo capture el catch.
    throw new Error("Ups. tuve un error");
    
    return segundoValor + segundoValor;
}).then(tercerValor => {
    console.log("tercerValor",tercerValor);
    
}).catch(error=>{
    console.log(error);
});