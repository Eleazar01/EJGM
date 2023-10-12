import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UserController';

const userrouter = Router();

userrouter.get('/', getUsuarios);
userrouter.get('/:id', getUsuario);
userrouter.delete('/:id', deleteUsuario);
userrouter.post('/', postUsuario);
userrouter.put('/:id', updateUsuario);

export default userrouter;