const argv = require('./config/yargs').argv;
const colors = require('colors'); // cambia de color la consola

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

/*
    METODO SIN YARGS
    let argv = process.argv;
    let parametro = argv[2];
    let base = parametro.split('=')[1];
*/

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
//console.log('base: ' + base);
//console.log('limite ' + limite);

switch (comando) {
    case 'listar':
        listar(base, limite)
            .then((data) => {
                console.log('=================='.green);
                console.log(`=tabla de ${base}=======`.green);
                console.log('=================='.green);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');
}