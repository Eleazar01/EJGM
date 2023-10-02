import { Router } from 'express';
import { getArchivo } from '../controllers/ArchivoController';


const routerarchivo = Router();

routerarchivo.post('/archivo/', getArchivo);

export default routerarchivo;