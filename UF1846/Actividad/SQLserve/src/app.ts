import 'dotenv/config';
import express  from 'express';
import cors from 'cors';
// import { router } from './routes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
// app.use(router);

app.listen(PORT, () => {
    console.log(`El servidor está conectado en el puerto ${PORT}`);
});
