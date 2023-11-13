import mongoose from "mongoose";
import { Schema } from "mongoose";

const profesionalSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  contraseña: { type: String, required: true },
});

//convertir a modelo de mongoose
const Profesional = mongoose.model("Profesional", profesionalSchema);

export default Profesional;