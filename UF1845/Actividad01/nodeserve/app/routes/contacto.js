const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contato');

// api/contactos
router.post('/', contactoController.crearcontacto);
router.get('/', contactoController.obtenercontactos);
router.put('/:id', contactoController.actualizarcontacto);
router.get('/:id', contactoController.obtenercontacto);
router.delete('/:id', contactoController.eliminarcontacto);

module.exports = router;