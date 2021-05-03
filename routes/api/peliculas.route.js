const { Router } = require('express');
const router = Router();

const {
  obtenerPeliculas,
  crearPelicula
} = require('../../controllers/api/peliculas.controller');

router.get('/peliculas', obtenerPeliculas);
router.post('/peliculas', crearPelicula);

module.exports = router;
