const express = require("express");
const app = express();

const root = require("./routes/index.js");
const crte = require("./routes/create.js");
const read = require("./routes/read.js");
const uptd = require("./routes/update.js");
const delt = require("./routes/delete.js");

const initData = require("./scripts/middelwares.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(initData);

app.get("/usuarios",read);
app.get("/usuarios/:nombre",read);
app.post("/usuarios",crte);
app.put("/usuarios/:nombre",uptd);
app.delete("/usuarios/:nombre",delt);
app.get("/",root);

app.use((req,res)=>res.status(404).send("<h1>ERROR 404</h1>"));

app.listen(3000,()=>console.log("Server on http://localhost:3000"));