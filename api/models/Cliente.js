/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
        type:'string',
        required:true
    },
    apellidos:{
        type:'string',
        required:true
    },
    tipo_id:{
        type:'string',
        required:true
    },
    identificacion:{
        type:'integer',
        required:true
    },
    telefono:{
        type:'integer',
        required:true
    },
    direccion:{
        type:'string',
        required:true
    },
    cobrador:{
        model:'cobrador',
        required:true
    },
    prestamos:{
        collection: 'prestamo',
        via:'cliente',
        required:true
    }

  }
};

