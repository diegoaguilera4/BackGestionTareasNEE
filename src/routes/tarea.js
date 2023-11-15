import express from 'express';

import {
    agregarTarea,
    obtenerTareas,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea
} from '../controllers/tarea.js';

const tarea = express.Router();

tarea.post('/add', agregarTarea);
tarea.get('/getAll', obtenerTareas);
tarea.get('/get/:id', obtenerTarea);
tarea.put('/update/:id', actualizarTarea);
tarea.delete('/delete/:id', eliminarTarea);

export default tarea;