import mongoose from "mongoose";
import { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombre: { type: String, required: true },
    estado: { type: String, required: true },
    fechaCreacion: { type: Date},
    imagen: { type: String, required: true },
    asignacion: { type: String, required: true },
    instrucciones: [{ type: Schema.Types.ObjectId, ref: 'Instruccion' }],
});

//convertir a modelo de mongoose
const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;