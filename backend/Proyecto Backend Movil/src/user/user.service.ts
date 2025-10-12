import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async register(data: { nombre: string; email: string; password: string }) {
    const { nombre, email, password } = data;

    const existing = await this.prisma.usuario.findUnique({ where: { email } });
    if (existing) throw new Error('El usuario ya existe');

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prisma.usuario.create({
      data: { nombre, email, password: hashed },
    });

    return { message: 'Usuario registrado correctamente', user };
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await this.prisma.usuario.findUnique({ where: { email } });
    if (!user) throw new Error('Usuario no encontrado');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    return { message: 'Inicio de sesión exitoso', token, user };
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }
}
