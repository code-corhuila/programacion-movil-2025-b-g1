const express = require("express");
const usuariosRoutes = require("./routes/usuarios.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

// Configuración Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Usuarios",
      version: "1.0.0",
      description: "Documentación de API REST de usuarios"
    },
    servers: [{ url: "http://localhost:3001" }],
    components: {  // AGREGAR ESTO
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
};

// Configuración Swagger
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Rutas
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;
