const express = require('express');

const servidor = express();

//Criando o nosso endpoint
servidor.get("/hello", (req, res) => {
    res.sed("servidor do renanbryan69")
})

servidor.listen(3000, () => {
    console.log("servidor na porta 3000 está funfando")
})