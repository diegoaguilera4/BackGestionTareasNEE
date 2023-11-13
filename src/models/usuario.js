import mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    contraseña: { type: String, required: true },
    rol: { type: String, required: true },
    codigosVinculacion: { type: [String], required: true },
});

//convertir a modelo de mongoose
const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;


