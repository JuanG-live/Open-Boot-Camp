//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista = ["Mantecol","Pan dulce","Sidra","Costillar","Resakit"]
console.log(lista);

//Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push('Aceite de girasol');
console.log(lista);
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop()
console.log(lista);
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        titulo: 'Kimi', 
        director:'Steven Soderbergh', 
        fecha: 2022 
    },
    {
        titulo: 'Beatiful Mind', 
        director:'Ron Howard', 
        fecha: 2001 
    },
    {
        titulo:'Jurassic Park', 
        director: 'Steven Spielberg', 
        fecha: 1993
    }
];
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasMayor = peliculas.filter(valor => valor.fecha>2010)
console.log(peliculasMayor);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((pelicula) =>{
    return pelicula.director;
})
console.log(directores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((peliculas) => {
    return peliculas.titulo;
})
console.log(titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lista1 = directores.concat(titulos);
console.log(lista1);
console.log(lista1);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lista2 = [...directores, ...titulos]
console.log(lista2)

