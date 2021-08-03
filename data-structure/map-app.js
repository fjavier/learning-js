//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//Definiendo un nuevo mapa
//Un mapa es una estructura de datos para almacenar clave/valor
//La clave puede ser de cualquier tipo (funcion, objeto, primitivo)
const path = new Map();

//Para poder agregar valores al map utilizamos el metodo set.
path.set("/","index");
path.set("/about","Acerca de");

//Se pueden agregar valores nulos como claves
path.set(null, null);

//Se pueden reemplazar los valores con un nuevo valor, y siempre se mantiene su orden.
path.set("/","home");

console.log(path);
console.log("Tamaño del mapa:",path.size);

//Obteniendo el valor pasandole la clave al mapa
console.log("valor del / : ", path.get("/"));
console.log("valor de una clave que no existe : ", path.get("/no-existe"));
//Eliminando item del mapa.
path.delete("/about");
console.log(path);

//Validando si existe un item por medio de su clave
console.log(path.has("/about"));
//Limpiando el map
path.clear();
console.log(path);

//Otro mapa
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, "One");

//Iterando mapa con for
for(const [key, value] of myMap){
    console.log("key: ",key," | value: ", value);
}

//Iterando claves
for(const key of myMap.keys()){
    console.log("Key: ",key);
}

//Iterando valores
for(const value of myMap.values()){
    console.log("Value: ",value);
}

//Iterando con foreach
myMap.forEach(function (value, key) {
    console.log("key: ", key, "| value: ", value);
});

//Convirtiendo un array en map
const array = [["key1","value1"],["key2","value2"]];
const arrayToMap = new Map(array);
console.log(arrayToMap);

//Convirtiendo map to array
const mapToArray = Array.from(arrayToMap);
console.log(mapToArray);