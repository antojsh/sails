/**
 * Prestamo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        monto:{
            type:'integer',
            required:true
        },
        cliente:{
           model:'cliente',
           required:true 
        },
        cobrador:{
           model:'cobrador',
           required:true 
        },
        tipo_plazo:{
            type:'string',
            required:true

        },
        plazo:{
            type:'integer',
            required:true
        },
        pagos:{
            collection: 'pago',
            via:'prestamo',
            required:true
        }

        
  }
};

