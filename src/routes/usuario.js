import express from 'express';

import {
    agregarUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../controllers/usuario.js';

const router = express.Router();

router.post('/add', agregarUsuario);
router.get('/getAll', obtenerUsuarios);
router.get('/get/:id', obtenerUsuario);
router.put('/update/:id', actualizarUsuario);
router.delete('/delete/:id', eliminarUsuario);

export default router;



