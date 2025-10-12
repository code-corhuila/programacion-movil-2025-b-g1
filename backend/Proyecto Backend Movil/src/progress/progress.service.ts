import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()   
export class ProgresoService {
  constructor(private prisma: PrismaService) {}

async registrar(usuarioId: number, flashcardId: number, acierto: boolean) {
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

  async estadisticas(usuarioId: number) {
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
}