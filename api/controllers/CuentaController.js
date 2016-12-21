/**
 * CuentaController
 *
 * @description :: Server-side logic for managing cuentas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
        console.log(res.body)
        req.body.usuario= req.token.id
        Cuenta.create(req.body,function(err,cuenta){
            res.send(cuenta)
        })
    }
};

