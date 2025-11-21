const Usuario = require('../models/usuario.model');

let usuarios = [];

// Crear usuario
exports.crearUsuario = (req, res) => {
  const nuevo = new Usuario(
    Date.now(),
    req.body.nombre,
    req.body.email,
    req.body.password,
    new Date()
  );
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
};

// Listar usuarios
exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

// Obtener usuario por ID
exports.obtenerUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  res.json(usuario);
};

// Actualizar usuario
exports.actualizarUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  Object.assign(usuario, req.body);
  res.json(usuario);
};

// Eliminar usuario
exports.eliminarUsuario = (req, res) => {
  const index = usuarios.findIndex(u => u.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  usuarios.splice(index, 1);
  res.json({ mensaje: "Usuario eliminado correctamente" });
};
