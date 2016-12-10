/**
 * Cuenta.js
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
    telefono:{
        type:'integer',
        required:true
    },
    direccion:{
        type:'string',
        required:true
    },
    descripcion:{
        type:'string',
        required:true
    },
    usuario:{
        model:'usuario'
    },
    clientes:{
        collection: 'cliente',
        via:'cuenta',
    },
  }
};

