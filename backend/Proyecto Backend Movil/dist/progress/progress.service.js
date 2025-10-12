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
exports.ProgresoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProgresoService = class ProgresoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registrar(usuarioId, flashcardId, acierto) {
        return this.prisma.progreso.upsert({
            where: {
                progress_user_flashcard: { usuarioId, flashcardId },
            },
            update: {
                intentos: { increment: 1 },
                aciertos: { increment: acierto ? 1 : 0 },
            },
            create: {
                usuarioId,
                flashcardId,
                intentos: 1,
                aciertos: acierto ? 1 : 0,
            },
        });
    }
    async estadisticas(usuarioId) {
        const result = await this.prisma.progreso.aggregate({
            _sum: {
                intentos: true,
                aciertos: true,
            },
            where: { usuarioId },
        });
        const totalIntentos = result._sum.intentos || 0;
        const totalAciertos = result._sum.aciertos || 0;
        return {
            total: totalIntentos,
            aciertos: totalAciertos,
            porcentaje: totalIntentos > 0 ? (totalAciertos / totalIntentos) * 100 : 0,
        };
    }
};
exports.ProgresoService = ProgresoService;
exports.ProgresoService = ProgresoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProgresoService);
//# sourceMappingURL=progress.service.js.map