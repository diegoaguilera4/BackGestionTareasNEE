import mongoose from "mongoose";
import { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombre: { type: String, required: true },
    estado: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now },
    imagen: { type: String, required: true },
    asignacion: { type: String, required: true },
    repeticion: { type: String, required: true },
    instrucciones: [{
        descripcion: { type: String, required: true },
        estado: { type: Boolean, default: false },
        observacion: { type: String, default: "" },
    }],
});


//convertir a modelo de mongoose
const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;