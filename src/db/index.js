import mongoose from "mongoose";
import dotenv from "dotenv";

// Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: "./src/.env" });

// URL de conexión a la base de datos
const dbUrl = process.env.DB_URL;

// Opciones de configuración de la conexión (opcional)
const dbOptions = {
  // Otras opciones de configuración aquí...
};

// Conectarse a la base de datos
const miDB = mongoose;
miDB
  .connect(dbUrl, dbOptions)
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Exportar la instancia de Mongoose para su uso en otros archivos
export default miDB;
