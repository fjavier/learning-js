console.log("Hola desde promise-app.js");
//Declaración de promesa
//Recibe 2 parametros.
const promise = new Promise((resolve, reject)=>{
    let allOk = false;

    if(allOk){
        //El resolve devuelve un valor si todo salio bien, el valor que devuelve en este caso es una cadena
        resolve("todo salio bien");
    }else{
        //El reject indica si algo no estuvo bien en la promesa.
        
        reject(new Error("Huy. se cayo"));
    }
});

promise.then(valor=>{
    console.log(valor);
},error => {
    console.log(error);
});