const argv = require('./config/yargs').argv;
const colors = require('colors');

//const fs = require('fs'); // esta es  propia de node
// const express = require('./express');  Los que tienen ./ son externos o creados durante el desarrollo

// Esta es la forma de importar archivos (pero debe formar parte de module)
//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // De esta forma se desestructura el import y se toma solo lo que se necesita
//const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            //.then(archivo => console.log(`Tabla Listada`))
            //.catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// Module es un objecto GLOBAL
//console.log(module);

//let base = 'abc';

/*

let data = '';

for (let i = 0; i < 11; i++) {
    data += ` ${ base } * ${ i } = ${ base*i } \n`;

}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
    if (err) throw err;

    console.log('El archivo ha sid creado');
});


*/

//console.log(process); // process tambien es un avariable d eentorno de ode
console.log("\n");
//console.log(process.argv); /// ver la ubicacion de node y la de la app

//let argv = process.argv;
let argv2 = process.argv;
// let parametro = argv[2];


console.log(argv); // argv de yargs


// let base = parametro.split('=')[1];
//console.log(base);