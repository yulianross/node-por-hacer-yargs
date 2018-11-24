const { argv } = require('./config/yargs');
const tareas = require('./tareas/tareas');

const comando = argv._[0];

switch(comando) {
    case 'crear':
        tareas.crear(argv.descripcion);
    break;
    case 'listar':
        tareas.listar(argv.completado);
    break;
    case 'actualizar':
        tareas.actualizar(argv.descripcion, argv.completado);
    break;
    case 'borrar':
        tareas.borrarTarea(argv.descripcion);
    break;
    default:
    console.log('no hay ningún comando que se llame así');
}