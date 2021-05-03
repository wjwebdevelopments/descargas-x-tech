const { readFile } = require('fs');
const path = require('path');

exports.paginaPrincipal = (req, res) => {

    let peliculas;
    const urlDB = path.join(__dirname, '../data/peliculas.json');

    readFile(urlDB, 'utf-8', (err, peliculas) => {
      peliculas = JSON.parse(peliculas);
      // console.log(peliculas)
      // Mandando a la vista
      res.render('index', { peliculas, loading: false });

    })

}

exports.agregarArchivos = (req, res) => {

  res.render('agregar-archivos');
}
