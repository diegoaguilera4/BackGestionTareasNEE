import express from "express";
import {
    agregarProfesional,
    obtenerProfesionales,
    obtenerProfesional,
    actualizarProfesional,
    eliminarProfesional
} from "../controllers/profesional.js";

const profesional = express.Router();

profesional.post('/add', agregarProfesional);
profesional.get('/getAll', obtenerProfesionales);
profesional.get('/get/:id', obtenerProfesional);
profesional.put('/update/:id', actualizarProfesional);
profesional.delete('/delete/:id', eliminarProfesional);

export default profesional;