const { Router } = require('express');
const router = Router();

const {
  paginaPrincipal,
  agregarArchivos
} = require('../controllers/principal.controller');

// Crear la ruta principal
router.get('/', paginaPrincipal);
router.get('/agregar-archivos', agregarArchivos)

module.exports = router;
