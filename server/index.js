const path = require('path');
const express = require('express');
const router = express.Router();


module.exports = (app) => {

    // Configurando las vistas
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '../views'));

    // Configurando folder de archivos staticos o publicos
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // Crear la ruta principal
    router.get('/', (req, res) => {
        res.render('index', {
            titulo: 'Esta es la pagina principal',
            nombre: 'wilson juma'
        });
    });


    app.use(router);
    return app;
}
