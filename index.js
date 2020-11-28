const express =require("express");
const server = express();
const bodyParser = require ("body-parser");

const usuarios = ["matias", "juan", "natalia "];

server.use(bodyParser.json());

function validarUsuario(req,res,next){
    if(req.query.usuario === "matias"){
        next();
    }
    res.satus(401).json({error:"Usuario no autorizado"});
}

server.get("/",(req,res)=> {
    res.json(usuarios);
})

server.get("/contact",(req,res)=> {
    usuarios.push("lorena");
    res.json(usuarios);
})

server.listen(3000,() => {
    console.log("servidor iniciado");
})

