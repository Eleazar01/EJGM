import { Router } from 'express';
import { deleteAdmin, getAdmin, getAdmins, postAdmin, updateAdmin } from '../controllers/Admincontroller';


const routeradmin = Router();

routeradmin.get('/adminservices/', getAdmins);
routeradmin.get('/adminservices/:id', getAdmin);
routeradmin.delete('/adminservices/:id', deleteAdmin);
routeradmin.post('/adminservices/', postAdmin);
routeradmin.put('/adminservices/:id', updateAdmin);

export default routeradmin;