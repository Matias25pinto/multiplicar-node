/*Hay tres tipos de requierds 
    -Las que son propias de Node const fs = require('fs');
    -Las que son de librerias externas, paquetes externos que se instalan const fs = require('express');
    -Los que nosotros creamos en el proyecto const fs = require('./fs'); sin empiezan con ./ son archivos que nosotros escribimos
*/
// requiereds
const fs = require('fs'); // vamos a trabajar a FileSystem de Node
const colors = require('colors'); // cambia de color la consola

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un numero`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }
        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject;
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listar
}