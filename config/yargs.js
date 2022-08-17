import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs( hideBin( process.argv ) )
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar',
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      demandOption: true,
      default: false,
      describe: 'Muestra la tabla en consola',
    },
    'h': {
      alias: 'hasta',
      type: 'number',
      demandOption: true,
      default: 10,
      describe: 'Es el numero de valores con los que se multiplicara la base',
    },
  })
  .check(( argv, options ) => {
    if ( isNaN( argv.b ) ) {
      throw 'La base tiene que ser un numero'
    }
    return true;
  })
  .argv;

export default argv;
