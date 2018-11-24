const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
}

const opciones = {
    crear: {
        descripcion
    },
    listar: {
        completado: {
            demand: true,
            alias: 'c',
            desc: 'lista las tareas'
        }

    },
    actualizar: {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'marca como completado o pendiente la tarea'
        }
    },
    borrar: {
        descripcion
    }

}

const argv = require('yargs')
.command('crear', 'crear una tarea', opciones.crear)
.command('listar', 'listar todas las tareas', opciones.listar)
.command('actualizar', 'actualizar una tarea', opciones.actualizar)
.command('borrar', 'borrar una tarea', opciones.borrar)
.help()
.argv;


module.exports = {
    argv
}