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
exports.FlashcardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FlashcardService = class FlashcardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generar(documentoId) {
        const flashcards = Array.from({ length: 10 }).map((_, i) => ({
            pregunta: `¿Pregunta ${i + 1}?`,
            respuesta: `Respuesta generada automáticamente ${i + 1}`,
            documentoId,
        }));
        return this.prisma.flashcard.createMany({ data: flashcards });
    }
    async listar(documentoId) {
        return this.prisma.flashcard.findMany({ where: { documentoId } });
    }
};
exports.FlashcardService = FlashcardService;
exports.FlashcardService = FlashcardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FlashcardService);
//# sourceMappingURL=flashcard.service.js.map