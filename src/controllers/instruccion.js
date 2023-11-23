import Instruccion from '../models/instruccion.js';
import miDB from '../db/index.js';

//agregar instruccion
export const agregarInstruccion = async (req, res) => {
    try {
        const instruccion = new Instruccion(req.body);
        await instruccion.save();
        res.status(201).json(instruccion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todas las instrucciones
export const obtenerInstrucciones = async (req, res) => {
    try {
        const instrucciones = await Instruccion.find();
        res.status(200).json(instrucciones);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener una instruccion por id
export const obtenerInstruccion = async (req, res) => {
    try {
        const instruccion = await Instruccion.findById(req.params.id);
        res.status(200).json(instruccion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar una instruccion por id
export const actualizarInstruccion = async (req, res) => {
    try {
        const instruccion = await Instruccion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(instruccion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar una instruccion por id
export const eliminarInstruccion = async (req, res) => {
    try {
        const instruccion = await Instruccion.findByIdAndDelete(req.params.id);
        res.status(200).json(instruccion);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

