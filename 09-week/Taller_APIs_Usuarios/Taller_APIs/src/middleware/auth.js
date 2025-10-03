const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "miclavejwt";  // Usa la misma clave secreta del .env
// Middleware para verificar JWT
const authMiddleware = (req, res, next) => {
  try {
    // Extraer el token del header Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token no proporcionado o inválido" });
    }
    const token = authHeader.split(" ")[1];  // Quita "Bearer " y toma el token
    // Verificar el token
    const decoded = jwt.verify(token, SECRET);
    
    // Agregar el usuario decodificado a req para usarlo en controladores
    req.user = decoded;  // decoded contiene { sub: id, email, iat, exp }
    
    next();  // Continuar al controlador
  } catch (error) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};
module.exports = authMiddleware;
