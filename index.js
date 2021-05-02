const express = require('express');
const server = require('./server');

const app = server(express());

app.listen(
    3000,
    console.log("Servidor corriendo en el puerto 3000")
);
