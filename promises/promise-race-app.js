console.log("Hola desde promise Race");
//El promise race devuelve la ejecución de la primera promesa procesada de una lista de promesas
let p1 = new Promise((resolve)=>{
    setTimeout(resolve, 3000, "Primer promesa");
});

let p2 = new Promise((resolve)=>{
    setTimeout(resolve, 500, "Segunda promesa");
});

let p3 = new Promise((resolve)=>{
    setTimeout(resolve, 500, "Tercer promesa");
});

let promisesRace = [ p1,p2,p3 ];

//ESTE DEBERA DEVOLVER EN TEORIA EL VALOR DE LA SEGUNDA PROMESA.
Promise.race(promisesRace).then(valor => {
    console.log("La primer promesa que termino su ejecución fue: "+valor);
}, error=>{
    console.log(error);
});