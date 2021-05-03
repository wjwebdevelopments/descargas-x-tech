const { readFile } = require('fs');
const path = require('path');

// Models
const Pelicula = require('../../models/pelicula.model');

exports.obtenerPeliculas = (req, res) => {

  // let peliculas;
  // const urlDB = path.join(__dirname, '../../data/peliculas.json');
  //
  // readFile(urlDB, 'utf-8', (err, peliculas) => {
  //   peliculas = JSON.parse(peliculas);
  //   res.json(peliculas);
  // })

  Pelicula.findAll()
    .then(peliculas => {
      res.json(peliculas);
    })


}

exports.crearPelicula = (req, res) => {

  const pelicula = new Pelicula(req.body);
  pelicula.save()
    .then(pelicula => {
      console.log(pelicula);
      res.send('Pelicula agregada!');
    })
}
