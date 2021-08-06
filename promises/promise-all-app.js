console.log("Hola desde promise all");

//El promiseall nos permite ejecutar una lista de promesas pasadas como arreglo
const promise1 = new Promise((resolve)=>{
    setTimeout(resolve, 3000, "Primer promesa");
});

const promise2 = new Promise((resolve)=>{
    setTimeout(resolve, 500, "Segunda promesa");
});

const promise3 = new Promise((resolve)=>{
    setTimeout(resolve, 500, "Tercer promesa");
});

let allPromise = [ promise1, promise2, promise3 ];

//El promise all ejecuta cada una de las promesas en el orden que se encuentran en el arreglo
//El espera a que todas las promesas se ejecuten para mostrar el valor
Promise.all(allPromise).then(valores => {
    console.log(valores);
    return valores;
}).then(valores=>{
    console.log("Dentro de otra promesa",valores)
}).catch(error=> {
    console.log(error);
});