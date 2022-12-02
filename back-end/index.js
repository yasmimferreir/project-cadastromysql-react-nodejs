const express = require("express");
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    port: "3307",
    password: "root159",
    database: "cadastro"
});

app.get("/", (req, res) => {
    let SQL = "INSERT INTO tabcadastro( nome, email, data, cidade, endereco, telefone) VALUES ('?', '?', '?', '?', '?', '?' )";

    db.query(SQL, (err, result) => {
        console.log(err)
    });
});


app.get("/", (req, res) => {
    res.send("hello word")
});

app.listen(3001, () => {
    console.log("🛰️ Rodando servidor")
});

