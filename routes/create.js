const express = require("express");
const router = express.Router();

router.post("/usuarios",(req,res)=>{
    let usuarios = res.locals.usersObj;
    
    usuarios.push({
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        edad:req.body.edad,
        lugarProcedencia:req.body.origen
    })
    res.locals.usersObj = usuarios;

    res.redirect('/');
});

module.exports = router;
