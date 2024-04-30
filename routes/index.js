const express = require("express");
const router = express.Router();

const domGen = require("./../data/dom.js");
const FormDOM = domGen.FormDOM;

router.get("/",(req,res)=>{
    res.send(`
        <h1>CRUD primigenio :</h1>
        </br>
        ${FormDOM("/usuarios","GET","usuarios")}
        ${FormDOM("/usuarios","POST","crear","nombre","edad","origen")}
        ${FormDOM("/usuarios","GET","buscar","nombre")}         
    `);
})


module.exports = router;