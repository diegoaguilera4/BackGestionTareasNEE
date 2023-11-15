import Tarea from "../models/tarea.js";
import miDB from "../db/index.js";
//agregar tarea
export const agregarTarea = async (req, res) => {
    try {
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.status(201).json(tarea);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todas las tareas
export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener una tarea por id
export const obtenerTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar una tarea por id
export const actualizarTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar una tarea por id
export const eliminarTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
