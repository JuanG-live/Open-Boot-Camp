class Estudiante {
        nombre =  'Juan'
        asignatura = ['JavaScript','HTML','CSS']

   obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
   }
}
const nuevoEstudiante = new Estudiante()
console.log(nuevoEstudiante)

console.log(Estudiante.obtenDatos())