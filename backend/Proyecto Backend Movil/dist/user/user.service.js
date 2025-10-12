"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(data) {
        const { nombre, email, password } = data;
        const existing = await this.prisma.usuario.findUnique({ where: { email } });
        if (existing)
            throw new Error('El usuario ya existe');
        const hashed = await bcrypt.hash(password, 10);
        const user = await this.prisma.usuario.create({
            data: { nombre, email, password: hashed },
        });
        return { message: 'Usuario registrado correctamente', user };
    }
    async login(data) {
        const { email, password } = data;
        const user = await this.prisma.usuario.findUnique({ where: { email } });
        if (!user)
            throw new Error('Usuario no encontrado');
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid)
            throw new Error('Contraseña incorrecta');
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '2h',
        });
        return { message: 'Inicio de sesión exitoso', token, user };
    }
    async findAll() {
        return this.prisma.usuario.findMany();
    }
    async findOne(id) {
        return this.prisma.usuario.findUnique({ where: { id } });
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
//# sourceMappingURL=user.service.js.map