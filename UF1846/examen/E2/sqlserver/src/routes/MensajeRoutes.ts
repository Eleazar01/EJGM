import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje } from '../controllers/MensajeController';

const routermensaje = Router();

routermensaje.get('/mensajes/', getMensajes);
routermensaje.get('/mensajes/:id', getMensaje);
routermensaje.delete('/mensajes/:id', deleteMensaje);
routermensaje.post('/mensajes/', postMensaje);
routermensaje.put('/mensajes/:id', updateMensaje);

export default routermensaje;