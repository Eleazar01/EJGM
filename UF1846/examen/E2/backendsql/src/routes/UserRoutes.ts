import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UserController';

const userrouter = Router();

userrouter.get('/usuarios/', getUsuarios);
userrouter.get('/usuarios/:id', getUsuario);
userrouter.delete('/usuarios/:id', deleteUsuario);
userrouter.post('/usuarios/', postUsuario);
userrouter.put('/usuarios/:id', updateUsuario);

export default userrouter;