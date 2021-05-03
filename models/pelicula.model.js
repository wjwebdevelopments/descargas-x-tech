const path = require('path');
const { readFile, readFileSync, writeFile } = require('fs');
const urlDB = path.join(__dirname, '../data/peliculas.json');

class Pelicula {

  // Atributos
  titulo;
  cortaDescripcion;
  imagenUrl;
  fichaTecnica;
  largaDescripcion;
  descarga


  peliculas = [];

  // Constructor
  constructor({
    titulo,
    cortaDescripcion,
    imagenUrl,
    tituloOriginal,
    fechaDeEstreno,
    duracionFicha,
    pais,
    director,
    actores,
    genero,
    tematicas,
    largaDescripcion,
    peso,
    formato,
    codec,
    videoBitRate,
    audioPrincipal,
    audioSecundario,
    resolucion,
    subtitulos,
    duracion,
    link
  }) {

    this.titulo = titulo;
    this.cortaDescripcion = cortaDescripcion;
    this.imagenUrl = imagenUrl;
    this.fichaTecnica = {
      tituloOriginal,
      fechaDeEstreno,
      duracionFicha,
      pais,
      director,
      actores,
      genero,
      tematicas
    }
    this.largaDescripcion = largaDescripcion;
    this.descarga = {
      HD720: {
        peso,
        formato,
        codec,
        videoBitRate,
        audioPrincipal,
        audioSecundario,
        resolucion,
        subtitulos,
        duracion,
        link
      }
    }

  }

  // Metodos
  static async findAll() {
    const peliculasDB = readFileSync(urlDB, 'utf-8');
    if(!peliculasDB) {;
      return [];
    };
    this.peliculas = JSON.parse(peliculasDB);
    return this.peliculas;
  }

  async save() {

    const pelicula = {
      titulo: this.titulo,
      cortaDescripcion: this.cortaDescripcion,
      imagenUrl: this.imagenUrl,
      fichaTecnica: this.fichaTecnica,
      largaDescripcion: this.largaDescripcion,
      descarga: this.descarga
    };

    readFile(urlDB, 'utf-8', (err, peliculasDB) => {

      if (err) return console.log(err);

      if (!peliculasDB) {
        this.peliculas.push(pelicula);
        return writeFile(urlDB, JSON.stringify(this.peliculas, null, 3), err => {
          if (err) return console.log(err);
        });
      }

      this.peliculas = [ ...JSON.parse(peliculasDB), pelicula];

      writeFile(urlDB, JSON.stringify(this.peliculas, null, 3), err => {
        if (err) return console.log(err);
      });

    });

    return pelicula;

  }
}

module.exports = Pelicula;
