

const nombre = "Erik";
const apellido = "Villegas";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log('nombreCompleto :>> ', nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}


console.log(`Este es un texto: ${getSaludo( nombreCompleto) }`);