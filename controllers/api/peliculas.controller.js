const { readFile } = require('fs');
const path = require('path');

const Pelicula = require('../../models/pelicula.model');

exports.obtenerPeliculas = (req, res) => {
  Pelicula.findAll()
    .then(peliculas => {
      res.json(peliculas);
    });
}

exports.crearPelicula = (req, res) => {
  const pelicula = new Pelicula(req.body);
  pelicula.save()
    .then(pelicula => {
      console.log(pelicula);
      res.send('Pelicula agregada!');
    });
}
