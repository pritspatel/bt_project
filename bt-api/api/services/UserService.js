module.exports = {

    findUserByUsername : function(username,password){
        console.log('u : ' + username);
        console.log('p : ' + password);
        if(username === 'ppatel' && password === 'password'){
            console.log('success ');
            return "simple-jwt-token-from-sails-js";
        }else{
            return undefined;
        }
    }
};