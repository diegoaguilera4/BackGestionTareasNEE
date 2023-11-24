import Usuario from '../models/usuario.js';
import miDB from "../db/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

export const agregarUsuario = async (req, res) => {
    try {
        // Obtén la contraseña sin encriptar del cuerpo de la solicitud
        const { contrasenia, ...restoDatosUsuario } = req.body;

        // Genera una sal (salt)
        const salt = await bcrypt.genSalt(10);

        // Genera el hash de la contraseña con la sal
        const contraseniaEncriptada = await bcrypt.hash(contrasenia, salt);

        // Crea un nuevo objeto de usuario con la contraseña encriptada
        const usuario = new Usuario({
            ...restoDatosUsuario,
            contrasenia: contraseniaEncriptada,
        });

        // Guarda el usuario en la base de datos
        await usuario.save();

        // No devuelvas la contraseña en la respuesta
        usuario.contrasenia = undefined;

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const login = async (req, res) => {
    const { email, contrasenia } = req.body;

    try {
        // Busca al usuario por correo electrónico en la base de datos
        const usuario = await Usuario.findOne({ email });

        // Verifica si el usuario existe
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verifica la contraseña
        const contraseniaValida = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!contraseniaValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }
        const secretKey = process.env.KEY;
        let tokenData = {usuarioId: usuario._id, email: usuario.email, rol: usuario.rol, nombre: usuario.nombre}
        // En este punto, las credenciales son válidas, genera un token de autenticación
        const token = jwt.sign(tokenData, secretKey, { expiresIn: '1h' });

        // Devuelve el token en la respuesta
        res.status(200).json({ status: true, token });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener un usuario por id
export const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un usuario por id
export const actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un usuario por id
export const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
