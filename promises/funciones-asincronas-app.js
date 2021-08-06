console.log("Hola desde funciones asincronas.");
//Las funciones asincronas controlan su ejecución a traves de un bucle de eventos

function primerProceso(){
    return new Promise(resolve=>{
        setTimeout(resolve, 1000, "desde primerProceso");
    });
}

function segundoProceso(){
    return new Promise(resolve=>{
        setTimeout(resolve, 3000, "desde segundoProceso");
    });
}

function tercerProceso(){
    return new Promise(resolve=>{
        setTimeout(resolve, 500, "desde tercerProceso");
    });
}

async function runAll(){
    let primerValor = await primerProceso();
    let segundValor = await segundoProceso();
    let tercerValor = await tercerProceso();

    console.log("Desde run all");
    console.log(primerValor, segundValor, tercerValor);
}

runAll();