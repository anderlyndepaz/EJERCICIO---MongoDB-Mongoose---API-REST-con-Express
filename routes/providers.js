const express = require('express');
const router = express.Router();
const Provider = require('../controllers/providers');

router.get('/', Provider.obtenerUsuarios);
router.get('/:id', Provider.obtenerUsuario);
router.post('/', Provider.crearUsuario);
router.put('/:id', Provider.actualizarUsuario);
router.delete('/:id', Provider.eliminarUsuario);

module.exports = router;
