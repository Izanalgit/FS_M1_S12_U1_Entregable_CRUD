const users = require("./../data/users.js");
const usuarios = users().usuarios;

function initData(req,res,next){
    res.locals.usersObj = res.locals.usersObj || usuarios; 
    next();
}


module.exports=initData;