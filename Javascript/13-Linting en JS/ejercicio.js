let nombre = "Juan";
let apellido = 'Genova';
const estudiante = nombre.concat(` `).concat(apellido)
let estudianteMayus =  estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLength = estudiante.length;
//Primera letra del nombre
let primeraLetra = nombre[0];
let primeraLetraComplejo = nombre.substring(0,1);
//ultima letra del apellido
let ultimaLetra = apellido[5]; //en este caso es porque sabes la cantidad de letras que tiene el apellido, pero en el caso que no te lo de, haces lo siguiente 
let ultimaLetraComplejo = apellido.substring(apellido.length -1, apellido.length);
//Quitar espacios vacios
let remplazarVacio = estudiante.replace(" ","");
//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreEnEstudiate = estudiante.includes(nombre); 