import Profesional from "../models/profesional.js";
import miDB from "../db/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

///agregar profesional
export const agregarProfesional = async (req, res) => {
    try {
        // Obtén la contraseña sin encriptar del cuerpo de la solicitud
        const { contrasenia, ...restoDatosProfesional } = req.body;

        // Genera una sal (salt)
        const salt = await bcrypt.genSalt(10);

        // Genera el hash de la contraseña con la sal
        const contraseniaEncriptada = await bcrypt.hash(contrasenia, salt);

        // Crea un nuevo objeto de profesional con la contraseña encriptada
        const profesional = new Profesional({
            ...restoDatosProfesional,
            contrasenia: contraseniaEncriptada,
        });

        // Guarda el profesional en la base de datos
        await profesional.save();

        // No devuelvas la contraseña en la respuesta
        profesional.contrasenia = undefined;

        res.status(201).json(profesional);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const login = async (req, res) => {
    const { email, contrasenia } = req.body;

    try {
        // Busca al profesional por correo electrónico en la base de datos
        const profesional = await Profesional.findOne({ email });

        // Verifica si el profesional existe
        if (!profesional) {
            return res.status(404).json({ mensaje: 'Profesional no encontrado' });
        }

        // Verifica la contraseña
        const contraseniaValida = await bcrypt.compare(contrasenia, profesional.contrasenia);
        if (!contraseniaValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        const secretKey = process.env.KEY;

        // En este punto, las credenciales son válidas, genera un token de autenticación
        const token = jwt.sign({ profesionalId: profesional._id }, secretKey, { expiresIn: '1h' });

        // Devuelve el token en la respuesta
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};


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
