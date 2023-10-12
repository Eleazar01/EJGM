import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController';

const routercurso = Router();

routercurso.get('/', getCursos);
routercurso.get('/:id', getCurso);
routercurso.delete('/:id', deleteCurso);
routercurso.post('/', postCurso);
routercurso.put('/:id', updateCurso);

export default routercurso;