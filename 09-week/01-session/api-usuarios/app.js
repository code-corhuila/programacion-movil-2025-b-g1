const express = require('express');
const app = express();
app.use(express.json());

const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/api/usuarios', usuariosRoutes);

app.listen(3000, () => {
  console.log("🚀 API Usuarios corriendo en http://localhost:3000");
});
