import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UserController';

const routeruser = Router();

routeruser.get('/usuario/', getUsuarios);
routeruser.get('/usuario/:id', getUsuario);
routeruser.delete('/usuario/:id', deleteUsuario);
routeruser.post('/usuario/', postUsuario);
routeruser.put('/usuario/:id', updateUsuario);

export default routeruser;