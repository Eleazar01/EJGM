const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

router.post('/', tareasController.crearTareas);
router.get('/', tareasController.obtenerTareas);
router.put('/:id', tareasController.actualizarTarea);
router.get('/:id', tareasController.obtenerTarea);
router.delete('/:id', tareasController.eliminarTarea);

module.exports = router;