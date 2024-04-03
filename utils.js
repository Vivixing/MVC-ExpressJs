//Importa la función createRequire del módulo module de Node.js
import {createRequire} from 'node:module';
//DEFINICIÓN DE CONSTANTES Y FUNCIONES
//Crea una instancia de require utilizando la función createRequire para poder importar archivos JSON.
const require = createRequire(import.meta.url);
//Define una función llamada readJSON que utiliza la instancia de require para leer archivos JSON.
export const readJSON = (path) => require(path);