import Ficha from '../models/ficha.js';
import miDB from '../db/index.js';

//agregar ficha
export const agregarFicha = async (req, res) => {
    try {
        const ficha = new Ficha(req.body);
        await ficha.save();
        res.status(201).json(ficha);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todas las fichas
export const obtenerFichas = async (req, res) => {
    try {
        const fichas = await Ficha.find();
        res.status(200).json(fichas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener una ficha por id
export const obtenerFicha = async (req, res) => {
    try {
        const ficha = await Ficha.findById(req.params.id);
        res.status(200).json(ficha);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar una ficha por id
export const actualizarFicha = async (req, res) => {
    try {
        const ficha = await Ficha.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(ficha);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar una ficha por id
export const eliminarFicha = async (req, res) => {
    try {
        const ficha = await Ficha.findByIdAndDelete(req.params.id);
        res.status(200).json(ficha);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

