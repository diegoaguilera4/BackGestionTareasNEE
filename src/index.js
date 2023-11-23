import express from 'express';
import cors from 'cors'; // Debes importar 'cors' antes de usarlo
import dotenv from 'dotenv';
import miDb from './db/index.js';
import router from './routes/index.js';
import tarea from './routes/tarea.js';
import usuario from './routes/usuario.js';
import paciente from './routes/paciente.js';
import instruccion from './routes/instruccion.js';
import sesion from './routes/sesion.js';
import profesional from './routes/profesional.js';
import ficha from './routes/ficha.js';

// Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: './src/.env'});

const app = express();
const port = process.env.PORT_SERVER || 3030;

// Debes habilitar CORS antes de definir tus rutas
app.use(cors());

app.use(express.json());

// Luego, configura tus rutas
app.use('/', router);
app.use('/tarea', tarea);
app.use('/usuario', usuario);
app.use('/paciente', paciente);
app.use('/instruccion', instruccion);
app.use('/sesion', sesion);
app.use('/profesional', profesional);
app.use('/ficha', ficha);

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
