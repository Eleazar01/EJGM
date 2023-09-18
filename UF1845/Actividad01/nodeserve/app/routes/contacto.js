const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contato');

// api/contactos
router.post('/', contactoController.crearContacto);
router.get('/', contactoController.obtenerContacto);
router.put('/:id', contactoController.actualizarContacto);
router.get('/:id', contactoController.obtenerContacto);
router.delete('/:id', contactoController.eliminarContacto);

module.exports = router;