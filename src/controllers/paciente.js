import Paciente from "../models/paciente.js";
import miDB from "../db/index.js";
import crypto from 'crypto';


export const agregarPaciente = async (req, res) => {
    try {
        // Generar un código de vinculación único
        const codigoVinculacion = generarCodigoVinculacion();

        // Crear el objeto paciente con el código de vinculación generado
        const paciente = new Paciente({
            ...req.body,
            codigoVinculacion,
        });

        // Guardar el paciente en la base de datos
        await paciente.save();

        res.status(201).json(paciente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};


// Función para generar un código de vinculación único
function generarCodigoVinculacion() {
    const longitud = 4; // Puedes ajustar la longitud según tus necesidades
    const bytes = crypto.randomBytes(longitud);
    const codigo = bytes.toString('hex').toUpperCase(); // Convierte a cadena hexadecimal y mayúsculas

    return codigo;
}

//obtener todos los pacientes
export const obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener un paciente por id
export const obtenerPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un paciente por id
export const actualizarPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un paciente por id
export const eliminarPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findByIdAndDelete(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
