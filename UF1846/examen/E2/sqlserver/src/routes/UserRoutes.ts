import { Router } from 'express';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/UserController';

const routeruser = Router();

routeruser.get('/usuarios/', getUsers);
routeruser.get('/usuarios/:id', getUser);
routeruser.delete('/usuarios/:id', deleteUser);
routeruser.post('/usuarios/', postUser);
routeruser.put('/usuarios/:id', updateUser);

export default routeruser;