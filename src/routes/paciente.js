import express from "express";

import {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from "../controllers/paciente.js";

const paciente = express.Router();

paciente.post("/add", agregarPaciente);
paciente.get("/getAll", obtenerPacientes);
paciente.get("/get/:id", obtenerPaciente);
paciente.put("/update/:id", actualizarPaciente);
paciente.delete("/delete/:id", eliminarPaciente);


export default paciente;