let nombre = 'Juan'
let apellido = 'Genova'

const datos = {
    nombre,
    apellido,
}
//- Almacena el objeto anterior en la LocalStorage
localStorage.setItem("datos", JSON.stringify(datos))

//- Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("datos", JSON.stringify(datos))

/*- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior*/
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

