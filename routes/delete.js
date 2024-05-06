const express = require("express");
const router = express.Router();

// router.delete("/usuarios/:nombre",(req,res)=>{
//     let usuarios = res.locals.usersObj;
//     const userName = req.params.nombre;

//     const usersNew = usuarios.filter((user)=>user.nombre.toUpperCase()!=userName.toUpperCase());

//     usuarios = usersNew;

//     res.locals.usersObj = usuarios;

//     res.json(res.locals.usersObj);
// }); NO PERSISTE, NO ENTIENDO PORQUE!


router.delete("/usuarios/:nombre",(req,res)=>{
    let usuarios = res.locals.usersObj;
    const userName = req.params.nombre;

    const userInx = usuarios.findIndex((user)=>user.nombre.toUpperCase()==userName.toUpperCase());

    const userPre = usuarios[userInx];
    
    usuarios.splice([userInx],1);

    res.locals.usersObj = usuarios;

    res.json(usuarios);
});



module.exports = router;