const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registrocontroller');

// api/registros
router.post('/', registroController.crearregistro);
router.get('/', registroController.obtenerregistros);
router.put('/:id', registroController.actualizarregistro);
router.get('/:id', registroController.obtenerregistro);
router.delete('/:id', registroController.eliminarregistro);

module.exports = router;