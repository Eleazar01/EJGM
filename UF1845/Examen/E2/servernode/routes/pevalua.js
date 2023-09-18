const express = require ('express')

const PevaluaController = require('../controllers/pevalua')
const router = express.Router()

router.get('/home', PevaluaController.home);
router.post('/test', PevaluaController.test);
router.post('/save-user', PevaluaController.saveEvalua);
router.get('/user/:id?', PevaluaController.getEvalua);
router.get('/users', PevaluaController.getEvalua);
router.put('/user/:id', PevaluaController.updateEvalua);
router.delete('/user/:id', PevaluaController.deleteEvalua);

module.exports = router