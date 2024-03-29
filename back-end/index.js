const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "",
    port: "",
    password: "",
    database: "cadastro"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { email } = req.body;
    const { data } = req.body;
    const { cidade } = req.body;
    const { endereço } = req.body;
    const { telefone } = req.body;

    let SQL = "INSERT INTO tabcadastro ( nome, email, data, cidade, endereco, telefone) VALUES (?,?,?,?,?,?)";

    db.query(SQL, [nome, email, data, cidade, endereço, telefone], (err, result) => {
        console.log(err);
    });
});

app.get("/getCards", (req, res) => {

    let SQL = "SELECT * from tabcadastro";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { email } = req.body;
    const { data } = req.body;
    const { cidade } = req.body;
    const { endereco } = req.body;
    const { telefone } = req.body;

    let SQL = "UPDATE tabcadastro SET nome = ?, email = ?, data = ?, cidade = ?, endereco = ?, telefone = ? WHERE idtabcadastro = ?";

    db.query(SQL, [nome, email, data, cidade, endereco, telefone, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    });

});

app.listen(3001, () => {
    console.log("🛰️ Rodando servidor")
});

