import argv from "./config/yargs.js";
import { crearArchivo } from "./helpers/multiplicar.js";

crearArchivo( argv.b, argv.h ,argv.l )
  .then((nombre) => console.log(nombre, "creado"))
  .catch(console.error);
