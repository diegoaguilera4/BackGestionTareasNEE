import express from "express";
import {
    agregarSesion,
    obtenerSesiones,
    obtenerSesion,
    actualizarSesion,
    eliminarSesion
} from "../controllers/sesion.js";

const sesion = express.Router();

sesion.post("/add", agregarSesion);
sesion.get("/getAll", obtenerSesiones);
sesion.get("/get/:id", obtenerSesion);
sesion.put("/update/:id", actualizarSesion);
sesion.delete("/delete/:id", eliminarSesion);

export default sesion;