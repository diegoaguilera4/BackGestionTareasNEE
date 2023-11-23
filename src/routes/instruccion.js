import express from "express";

import {
    agregarInstruccion,
    obtenerInstrucciones,
    obtenerInstruccion,
    actualizarInstruccion,
    eliminarInstruccion
} from "../controllers/instruccion.js";

const instruccion = express.Router();

instruccion.post('/add', agregarInstruccion);
instruccion.get('/getAll', obtenerInstrucciones);
instruccion.get('/get/:id', obtenerInstruccion);
instruccion.put('/update/:id', actualizarInstruccion);
instruccion.delete('/delete/:id', eliminarInstruccion);

export default instruccion;
