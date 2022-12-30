//- La fecha de hoy
const fecha = new Date()
console.log(fecha);

//- La fecha de tu nacimiento
const nacimiento = new Date(1991,7,14);
console.log(nacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tarde = fecha>nacimiento
console.log(tarde)

//- Una variable que contenga el día de tu nacimiento
const dia = nacimiento.getDate()
console.log(dia)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = nacimiento.getMonth()
console.log(mes);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = nacimiento.getFullYear()
console.log(año);
