import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FlashcardService {
  constructor(private prisma: PrismaService) {}

  async generar(documentoId: number) {
    const flashcards = Array.from({ length: 10 }).map((_, i) => ({
      pregunta: `¿Pregunta ${i + 1}?`,
      respuesta: `Respuesta generada automáticamente ${i + 1}`,
      documentoId,
    }));
    return this.prisma.flashcard.createMany({ data: flashcards });
  }

  async listar(documentoId: number) {
    return this.prisma.flashcard.findMany({ where: { documentoId } });
  }
}
