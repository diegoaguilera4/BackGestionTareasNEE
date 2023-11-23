import Sesion from '../models/sesion.js';
import miDB from '../db/index.js';

//agregar sesion
export const agregarSesion = async (req, res) => {
    try {
        const sesion = new Sesion(req.body);
        await sesion.save();
        res.status(201).json(sesion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todas las sesiones
export const obtenerSesiones = async (req, res) => {
    try {
        const sesiones = await Sesion.find();
        res.status(200).json(sesiones);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener una sesion por id
export const obtenerSesion = async (req, res) => {
    try {
        const sesion = await Sesion.findById(req.params.id);
        res.status(200).json(sesion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar una sesion por id
export const actualizarSesion = async (req, res) => {
    try {
        const sesion = await Sesion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(sesion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar una sesion por id
export const eliminarSesion = async (req, res) => {
    try {
        const sesion = await Sesion.findByIdAndDelete(req.params.id);
        res.status(200).json(sesion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

