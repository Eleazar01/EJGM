const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas');

// api/tareass
router.post('/', tareasController.creartareas);
router.get('/', tareasController.obtenertareass);
router.put('/:id', tareasController.actualizartareas);
router.get('/:id', tareasController.obtenertareas);
router.delete('/:id', tareasController.eliminartareas);

module.exports = router;