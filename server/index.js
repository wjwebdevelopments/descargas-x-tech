const path = require('path');
const express = require('express');

const rutaPrincipal = require('../routes/principal.route');

// RESTAPI
const apiPeliculas = require('../routes/api/peliculas.route');

module.exports = (app) => {

    // Configurando las vistas
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '../views'));

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    // Configurando folder de archivos staticos o publicos
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // Usando las rutas
    app.use('/', rutaPrincipal);

    // API
    app.use('/api/v1', apiPeliculas);

    return app;
}
