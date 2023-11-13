import mongoose from "mongoose";
import { Schema } from "mongoose";

const instruccionSchema = new Schema({
    descripcion: { type: String, required: true },
    estado: { type: Boolean, required: true },
    observacion: { type: String, required: true },
});

//convertir a modelo de mongoose
const Instruccion = mongoose.model("Instruccion", instruccionSchema);

export default Instruccion;