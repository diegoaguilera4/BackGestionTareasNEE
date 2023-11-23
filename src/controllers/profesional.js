import Profesional from "../models/profesional.js";
import miDB from "../db/index.js";

///agregar profesional
export const agregarProfesional = async (req, res) => {
    try {
        const profesional = new Profesional(req.body);
        await profesional.save();
        res.status(201).json(profesional);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todos los profesionales
export const obtenerProfesionales = async (req, res) => {
    try {
        const profesionales = await Profesional.find();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener un profesional por id
export const obtenerProfesional = async (req, res) => {
    try {
        const profesional = await Profesional.findById(req.params.id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un profesional por id
export const actualizarProfesional = async (req, res) => {
    try {
        const profesional = await Profesional.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un profesional por id
export const eliminarProfesional = async (req, res) => {
    try {
        const profesional = await Profesional.findByIdAndDelete(req.params.id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
