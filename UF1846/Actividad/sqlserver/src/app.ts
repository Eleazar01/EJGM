import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from './config/connectdb';

import routeruser from "./routes/UserRoutes";
import routercurso from './routes/CursoRoutes';
import routertareas from './routes/TareasRoutes';
import routermensaje from './routes/MensajeRoutes';
import routerarchivo from "./routes/ArchivoRoutes";
import routeradmin from "./routes/AdminRoutes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routercurso);
app.use(routeruser);
app.use(routertareas);
app.use(routermensaje);
app.use(routerarchivo);
app.use(routeradmin);

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

function test() {
  try {
    sequelize.authenticate();
    console.log('La conexión se ha establecido correctamente.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }
}
test();