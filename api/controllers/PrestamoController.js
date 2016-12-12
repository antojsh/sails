/**
 * PrestamoController
 *
 * @description :: Server-side logic for managing prestamoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        req.body.usuario= req.token.id
        console.log(req.body)
        Prestamo.create(req.body,function(err,prestamo){

            if(err){
                res.status(400)
                res.send(err)
            }else{
                res.send(prestamo)
            }
            
        })
    }
};

