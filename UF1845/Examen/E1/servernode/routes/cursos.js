const express = require ('express')

const CursosController = require('../controllers/cursos')
const router = express.Router()

router.get('/homecursos', CursosController.homec);
router.post('/testcursos', CursosController.testc);
router.post('/save-cursos', CursosController.saveCursos);
router.get('/cursos/:id?', CursosController.getCurso);
router.get('/cursos', CursosController.getCursos);
router.put('/cursos/:id', CursosController.updateCursos);
router.delete('/cursos/:id', CursosController.deleteCursos);

// const path = 'cursos'
//     `/${path}`,
//     CursosController.getData
// )
module.exports = router