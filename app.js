const express = require("express");
const app = express();

const root = require("./routes/index.js");
const crte = require("./routes/create.js");
const read = require("./routes/read.js");
// const uptd = require("./routes/update.js");
// const delt = require("./routes/delete.js");

const users = require("./data/users.js");
const usuarios = users().usuarios;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.locals.usersObj = usuarios;
    next();
})

app.get("/usuarios",read);
app.post("/usuarios",crte);
app.get("/",root);

app.use((req,res)=>res.status(404).send("<h1>ERROR 404</h1>"));

app.listen(3000,()=>console.log("Server on http://localhost:3000"));