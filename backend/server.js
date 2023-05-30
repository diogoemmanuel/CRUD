const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json())
app.use(cors());





const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "crud"
    }
)

app.get("/",(req,res) =>{
    const sql = "SELECT * FROM estoque";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Erro");
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{

    const sql = "INSERT INTO estoque (`nome`,`modelo`,`patrimonio`,`entrada`,`saida`,`local`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.modelo,
        req.body.patrimonio,
        req.body.entrada,
        req.body.saida,
        req.body.local

    ]
    db.query(sql, [values], (err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
        
    })
})

app.listen(8081, () =>{
    console.log("listening");
})


