//  #region EJ1
const palabra = "Gato"
const palabra2 = "Perro"

console.log(palabra)
console.log(palabra2)

console.log(palabra.concat(", ", palabra2))
console.log(`Un ${palabra} y un ${palabra2} se encontraron en el parque.`)
//  #endregion

//  #region EJ2
import {sumar, restar, multiplicar, dividir, pi} from './src/modules/matematicas.js';

console.log(sumar(5, 3));
console.log(restar(5, pi));
console.log(multiplicar(5, 3));
try {
    console.log(dividir(5, 0));
}
catch (error) {
    console.error(error.message);
}
//  #endregion

//  #region EJ3
import Alumno from './src/modules/alumno.js';

const alumno1 = new Alumno("Juan", "12345678");
const alumno2 = new Alumno("Maria", "87654321");

console.log(alumno1);
console.log(alumno2);
//  #endregion