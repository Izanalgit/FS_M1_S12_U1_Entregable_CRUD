const express = require("express");
const router = express.Router();

router.put("/usuarios/:nombre",(req,res)=>{
    let usuarios = res.locals.usersObj;
    const userName = req.params.nombre;

    const userInx = usuarios.findIndex((user)=>user.nombre.toUpperCase()==userName.toUpperCase());

    const userPre = usuarios[userInx];
    
    usuarios[userInx]={
        id: userInx + 1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.origen
    }
    res.locals.usersObj = usuarios;

    const userPos = usuarios[userInx];

    res.json({userPre ,userPos});
});



module.exports = router;
