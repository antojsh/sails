/**
 * PosicionController
 *
 * @description :: Server-side logic for managing Posicions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
        req.body.usuario= req.token.id
        console.log('lasdkfndsok')
        Posicion.create(req.body,function(err,posicion){
            if (err) {
                return res.json(err.status, {err: err});
            }
            res.send(posicion)
        })
    }
};

