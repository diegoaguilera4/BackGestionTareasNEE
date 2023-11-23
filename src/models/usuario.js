import mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    contrasenia: { type: String, required: true },
    rol: { type: String, required: true },
    codigosVinculacion: { type: [String],},
});

//convertir a modelo de mongoose
const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;


