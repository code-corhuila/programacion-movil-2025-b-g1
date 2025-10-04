class Usuario {
  constructor(id, nombre, email, password, fecha_creacion) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.fecha_creacion = fecha_creacion;
  }
}

module.exports = Usuario;
