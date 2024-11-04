const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.obtenerUsuarios);
router.get('/:id', userController.obtenerUsuario);
router.post('/', userController.crearUsuario);
router.put('/:id', userController.actualizarUsuario);
router.delete('/:id', userController.eliminarUsuario);

module.exports = router;