/**
 * Require
 */
const fs = require('fs'); // esta es  propia de node
// const express = require('./express');  Los que tienen ./ son externos o creados durante el desarrollo

const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Parámetro ${ base } IS NO Fucking number!`);
            return;
        } else if (!Number(limite)) {
            reject(`Parámetro ${ limite } IS NO Fucking number!`);
            return;
        }

        console.log('=============='.green);
        console.log(`### Tabla de ${ base } ###`.gray);
        console.log('=============='.red);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } x ${ i } = ${ base * i }`);

        }

    });

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Parámetro enviado ${ base }  IS No Fucking Number!!`);
            return;
        }
        if (!Number(limite)) {
            reject(`Parámetro enviado ${ limite }  IS No Fucking Number!!`);
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base*i } \n`;

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
            if (err)
                reject(err);

            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

// Se pueden exportar las funciones de forma globañ
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}