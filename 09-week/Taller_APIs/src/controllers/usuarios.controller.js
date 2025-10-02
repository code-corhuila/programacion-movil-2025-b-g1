const prisma = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "miclavejwt";

module.exports = {
  // Crear usuario (público)
  crearUsuario: async (req, res) => {
    try {
      const { name, email, password } = req.body;  
      
      // Validación básica
      if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email y password son requeridos" });
      }

      const hash = await bcrypt.hash(password, 10);

      const usuario = await prisma.usuario.create({
        data: { name, email, password: hash }  
      });

      res.status(201).json({
        id: usuario.id,
        name: usuario.name,  
        email: usuario.email,
        creation_date: usuario.creation_date  
      });
    } catch (err) {
      console.error("Error en crearUsuario:", err);
      if (err.code === 'P2002') {
        res.status(400).json({ error: "Email ya está en uso" });
      } else {
        res.status(400).json({ error: err.message });
      }
    }
  },

  // Login (público)
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email y password son requeridos" });
      }

      const usuario = await prisma.usuario.findUnique({ where: { email } });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const valido = await bcrypt.compare(password, usuario.password);
      if (!valido) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      const token = jwt.sign({ sub: usuario.id, email: usuario.email }, SECRET, { expiresIn: "15m" });
      res.json({ token });
    } catch (err) {
      console.error("Error en login:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  // Listar todos los usuarios (protegido)
  listarUsuarios: async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany({
        select: { id: true, name: true, email: true, creation_date: true } 
      });
      res.json(usuarios);
    } catch (err) {
      console.error("Error en listarUsuarios:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // Obtener usuario por ID (protegido)
  obtenerUsuarioPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id },
        select: { id: true, name: true, email: true, creation_date: true }  // CAMBIO: name y creation_date
      });
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (err) {
      console.error("Error en obtenerUsuarioPorId:", err);
      res.status(500).json({ error: err.message });
    }
  },

  // Actualizar usuario (protegido)
  actualizarUsuario: async (req, res) => {
    const { id } = req.params;
    
    // Verificar auth (req.user del middleware)
    if (!req.user || id !== req.user.sub) {
      return res.status(403).json({ error: "No tienes permiso para actualizar este usuario" });
    }

    try {
      const { name, email, password } = req.body;  
      
      if (!name && !email && !password) {
        return res.status(400).json({ error: "Al menos un campo debe cambiarse" });
      }

      const data = {};
      if (name !== undefined) data.name = name;  
      if (email !== undefined) data.email = email;
      if (password) {
        data.password = await bcrypt.hash(password, 10);
      }

      const usuario = await prisma.usuario.update({
        where: { id },
        data,
        select: { id: true, name: true, email: true, creation_date: true }  
      });

      res.json(usuario);
    } catch (err) {
      console.error("Error en actualizarUsuario:", err);
      if (err.code === 'P2002') {
        res.status(400).json({ error: "Email ya está en uso" });
      } else {
        res.status(400).json({ error: "No se pudo actualizar el usuario" });
      }
    }
  },

  // Eliminar usuario (protegido)
  eliminarUsuario: async (req, res) => {
    const { id } = req.params;
    
    // Verificar auth
    if (!req.user || id !== req.user.sub) {
      return res.status(403).json({ error: "No tienes permiso para eliminar este usuario" });
    }

    try {
      await prisma.usuario.delete({ where: { id } });
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (err) {
      console.error("Error en eliminarUsuario:", err);
      res.status(400).json({ error: "No se pudo eliminar el usuario" });
    }
  }
};