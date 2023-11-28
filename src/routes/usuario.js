import express from 'express';

import {
    agregarUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario,
    login,
    agregarPaciente,
} from '../controllers/usuario.js';

const usuario = express.Router();

usuario.post('/add', agregarUsuario);
usuario.post('/addPaciente/:id', agregarPaciente);
usuario.get('/getAll', obtenerUsuarios);
usuario.get('/get/:id', obtenerUsuario);
usuario.put('/update/:id', actualizarUsuario);
usuario.delete('/delete/:id', eliminarUsuario);
usuario.post('/login', login);

export default usuario;



