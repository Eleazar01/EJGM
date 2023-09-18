const express = require ('express')

const PevaluaController = require('../controllers/pevalua')
const router = express.Router()

router.get('/home', PevaluaController.home);
router.post('/test', PevaluaController.test);
router.post('/save-pevalua', PevaluaController.saveEvalua);
router.get('/pevalua/:id?', PevaluaController.getEvalua);
router.get('/pevalua', PevaluaController.getEvalua);
router.put('/pevalua/:id', PevaluaController.updateEvalua);
router.delete('/pevalua/:id', PevaluaController.deleteEvalua);

module.exports = router