import express from "express";

import { agregarFicha,
    obtenerFichas,
    obtenerFicha,
    actualizarFicha,
    eliminarFicha } from "../controllers/ficha.js";

const ficha = express.Router();

ficha.post('/add', agregarFicha);
ficha.get('/getAll', obtenerFichas);
ficha.get('/get/:id', obtenerFicha);
ficha.put('/update/:id', actualizarFicha);
ficha.delete('/delete/:id', eliminarFicha);

export default ficha;