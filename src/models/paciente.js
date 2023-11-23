import mongoose from "mongoose";
import { Schema } from "mongoose";

const pacienteSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    email: { type: String, required: true },
    ficha: { type: Schema.Types.ObjectId, ref: "Ficha"},
    codigoVinculacion: { type: String, required: true },
    tareas: [{ type: Schema.Types.ObjectId, ref: "Tarea"}],
});

//convertir a modelo de mongoose
const Paciente = mongoose.model("Paciente", pacienteSchema);

export default Paciente;