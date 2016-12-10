/**
 * ClienteController
 *
 * @description :: Server-side logic for managing clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
        console.log(req.token)
        req.body.usuario= req.token.id
        Cliente.create(req.body,function(err,cliente){

            if(err){
                res.status(400)
                res.send(err)
            }else{
                res.send(cliente)
            }
            
        })
    }
};

