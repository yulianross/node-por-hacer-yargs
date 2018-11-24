const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = (descripcion) => {
    
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarData();
    listadoPorHacer.push(porHacer);
    
    guardarData();
};

const guardarData = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err)
    })
};

const cargarData = () => {
   try {
       listadoPorHacer = require('../db/data.json');
   } catch (err) {
    listadoPorHacer = [];
   }
    
};

const listar = (completado) => {

    cargarData();
    for (let i = 0; i < listadoPorHacer.length; i ++) {
        if (getBoolean(listadoPorHacer[i].completado) == getBoolean(completado)) {
            console.log('==================================='.blue);
            console.log(listadoPorHacer[i].descripcion);
            console.log('==================================='.blue);
        }
    }
};

const actualizar = (descripcion, completado = true) => {
    cargarData();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer[index].completado = getBoolean(completado);
        guardarData();
    } else {
        console.log('la tarea no existe');
    }
};

const borrarTarea = (descripcion) => {
    cargarData();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarData();
    } else {
        console.log('la tarea no existe');
    }
};

const getBoolean = (value) => {
    if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return value;
    }
};

module.exports = {
    crear,
    guardarData,
    cargarData,
    listar,
    actualizar,
    borrarTarea

}