import mongoose from "mongoose";
import { Schema } from "mongoose";

const sesionSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    tareas: [{ type: Schema.Types.ObjectId, ref: "Tarea" }],
    observaciones: { type: String},
});

//convertir a modelo de mongoose
const Sesion = mongoose.model("Sesion", sesionSchema);

export default Sesion;