const express = require ('express')

const PevaluaController = require('../controllers/pevalua')
const router = express.Router()

router.get('/home', PevaluaController.home);
router.post('/test', PevaluaController.test);
router.post('/save-user', PevaluaController.saveUser);
router.get('/user/:id?', PevaluaController.getUser);
router.get('/users', PevaluaController.getUsers);
router.put('/user/:id', PevaluaController.updateUser);
router.delete('/user/:id', PevaluaController.deleteUser);

module.exports = router