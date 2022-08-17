import { writeFileSync } from "fs";

export const crearArchivo = async ( base, hasta, listar ) => {
  try {
    let salida = "";

    for ( let i = 1; i <= hasta; i++ ) {
      salida += `${i} * ${base} = ${i * base}\n`;
    }

    if ( listar ) {
      console.log("***************************");
      console.log(`****    Tabla del ${base}    ****`);
      console.log("***************************");
      
      console.log(salida);
    }

    writeFileSync(`./salida/tabla-${base}.txt`, salida, "utf8");
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
