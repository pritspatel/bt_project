/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    processLogin : function(req, res){
        console.log('processLogin called ...');
        console.log('req : ' + req.body.username);
        var username = req.body.username;
        var password = req.body.password;
        return res.send(UserService.findUserByUsername(username,password));
    }
};

