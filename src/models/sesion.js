import mongoose from "mongoose";
import { Schema } from "mongoose";

const sesionSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    paciente: { type: Schema.Types.ObjectId, ref: "Paciente" },
    observaciones: { type: [String], required: true },
});

//convertir a modelo de mongoose
const Sesion = mongoose.model("Sesion", sesionSchema);

export default Sesion;