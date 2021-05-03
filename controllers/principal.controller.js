const { readFile } = require('fs');
const path = require('path');

exports.paginaPrincipal = (req, res) => {

    let peliculas;
    const urlDB = path.join(__dirname, '../data/peliculas.json');

    readFile(urlDB, 'utf-8', (err, peliculas) => {
      if(!peliculas) {
        return res.render('index', { peliculas: []});
      }
      peliculas = JSON.parse(peliculas);
      res.render('index', { peliculas, loading: false });
    })

}

exports.agregarArchivos = (req, res) => {

  res.render('agregar-archivos');
}
