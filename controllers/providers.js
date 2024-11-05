const Provider = require('../services/providers');

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Provider.obtenerTodosLosUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Provider.obtenerUsuarioPorId(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Provider.crearUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Provider.actualizarUsuario(req.params.id, req.body);
        if (usuarioActualizado) {
            res.status(200).json(usuarioActualizado);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Provider.eliminarUsuario(req.params.id);
        if (usuario) {
            res.json({ mensaje: 'Usuario eliminado' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};
