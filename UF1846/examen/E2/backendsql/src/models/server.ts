import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import { routerFile } from '../routes/storage'
import { User } from './user';
import  Archivo  from './storage'
import  userrouter  from '../routes/UserRoutes'
import Usuario from './UserModel';
import Curso from './CursoModel';
import routercurso from '../routes/CursoRoutes';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();     
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/user/', routesUser);
        this.app.use('/api/cursos/', routercurso);
        this.app.use('/api/usuarios/', userrouter);
        this.app.use('/api/upload/', routerFile)
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
           
            await User.sync();
            await Archivo.sync();
            await Usuario.sync();
            await Curso.sync();
            
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;