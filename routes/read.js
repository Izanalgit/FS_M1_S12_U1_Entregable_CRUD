const express = require("express");
const router = express.Router();

router.get("/usuarios",(req,res)=>{
    const usuarios = res.locals.usersObj;
    let usersDOM;

    if(req.query.nombre){
        usuarios.forEach((user) => {
            usersDOM=`<h3>Usuario no encontrado!</h3>`;
            if(user.nombre===req.query.nombre){
                usersDOM=`<li><strong>${user.id} - ${user.nombre}</strong> | Edad :${user.edad} | Origen :${user.lugarProcedencia}</li>`;
            }  
        });
    }else{
        usersDOM=`${usuarios.map((user)=>`<li><strong>${user.id} - ${user.nombre}</strong> | Edad :${user.edad} | Origen :${user.lugarProcedencia}</li>`).join('')}`;
    }

    res.send(`
        <h1>CRUD primigenio :</h1>
        <h2>Usuarios</h2>
        </br>
        <ul>${usersDOM}</ul>
    `);
});


module.exports = router;