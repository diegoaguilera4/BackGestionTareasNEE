import Usuario from '../models/usuario.js';
import miDB from "../db/index.js";

///agregar usuario
export const agregarUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const Usuarios = await Usuario.find();
        res.status(200).json(Usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener un usuario por id
export const obtenerUsuario = async (req, res) => {
    try {
        const Usuario = await Usuario.findById(req.params.id);
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un usuario por id
export const actualizarUsuario = async (req, res) => {
    try {
        const Usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un usuario por id
export const eliminarUsuario = async (req, res) => {
    try {
        const Usuario = await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
