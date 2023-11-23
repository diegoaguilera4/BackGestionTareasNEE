import express from "express";
import {
    agregarProfesional,
    obtenerProfesionales,
    obtenerProfesional,
    actualizarProfesional,
    eliminarProfesional,
    login
} from "../controllers/profesional.js";

const profesional = express.Router();

profesional.post('/add', agregarProfesional);
profesional.get('/getAll', obtenerProfesionales);
profesional.get('/get/:id', obtenerProfesional);
profesional.put('/update/:id', actualizarProfesional);
profesional.delete('/delete/:id', eliminarProfesional);
profesional.post('/login', login);

export default profesional;