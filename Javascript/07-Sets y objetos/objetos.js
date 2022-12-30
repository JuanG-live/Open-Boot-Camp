//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = 
    {nombre: "Juan",
    apellido:"genova",
    edad: 31, 
    altura: 175, 
    eresDesarrollador: true};
console.log(datosPersonales)
//- Una variable que obtenga tu edad a partir del objeto anterior
const edadVariable = datosPersonales.edad;
console.log(edadVariable);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaDatos = [
    {...datosPersonales},
    {nombre: 'Rodrigo',
    apellido: 'Borthiry',
    edad: 32,
    altura: 180,
    eresDesarrollador: false
},
    {nombre:"El sabita",
    apellido: 'El sabita',
    edad: 30,
    altura: 174,
    eresDesarrollador: false
}];
console.log(listaDatos);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaNueva = listaDatos.sort((a,b) => b.edad - a.edad);
console.log(listaNueva);