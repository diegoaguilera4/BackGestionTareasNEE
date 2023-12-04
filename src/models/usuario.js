import mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
    rol: { type: String, required: true },
    pacientes: [{ type: Schema.Types.ObjectId, ref: "Paciente"}],
});

//convertir a modelo de mongoose
const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;


