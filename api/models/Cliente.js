/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombres:{
        type:'string',
        required:true
    },
    apellidos:{
        type:'string',
        required:true
    },
    
    identificacion:{
        type:'integer',
        required:true
    },
    email:{
        type:'string'
    },
    telefono:{
        type:'integer',
        required:true
    },
    foto:{
        type:'string'
    },
    latitud:{
        type:'float'
    },
    longitud:{
        type:'float'
    },
    usuario:{
        model:'usuario',
        required:true
    },
    prestamos:{
        collection: 'prestamo',
        via:'cliente'
    },
    cuenta:{
        model:'cuenta'
    }

  }
};

