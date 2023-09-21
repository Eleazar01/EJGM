const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');

router.post('/', mensajeController.crearMensajes);
router.get('/', mensajeController.obtenerMensajes);
router.put('/:id', mensajeController.actualizarMensaje);
router.get('/:id', mensajeController.obtenerMensaje);
router.delete('/:id', mensajeController.eliminarMensaje);

module.exports = router;