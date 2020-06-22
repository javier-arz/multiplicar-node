const opts = {
    base: {
        demand: true, //significa obligatorio
        alias: 'b' // 'b' puede usarse como alias de 'base'
    },
    limite: {
        alias: 'l',
        default: 10 //se puede especificar valor por defecto si no es ingresado desde la consoloa
    }
}

/**
 * Require
 */

const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar del número ingresado como base', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar del número ingresado como base', opts)
    .help()
    .argv; // Paquete de los módulos de node

module.exports = {
    argv
}