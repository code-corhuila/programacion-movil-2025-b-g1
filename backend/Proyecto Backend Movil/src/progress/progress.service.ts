// src/progress/progress.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// Nota: Recomiendo usar un DTO aquí, pero mantengo la firma para la corrección inmediata.
@Injectable()   
export class ProgresoService {
  constructor(private prisma: PrismaService) {}

async registrar(usuarioId: number, flashcardId: number, acierto: boolean) {
    // Usamos UPSERT: busca y actualiza si existe, o crea si no existe (primer intento).
    return this.prisma.progreso.upsert({
      // 1. Condición de búsqueda (debe ser la sintaxis que Prisma espera).
      // Si usaste la Opción 1 (nombrar el índice), la sintaxis es:
      where: {
         // Usamos el nombre del índice que definimos en el schema.prisma
         progress_user_flashcard: { usuarioId, flashcardId }, 
      },
      // 2. Data para ACTUALIZAR (si la fila existe)
      update: {
        intentos: { increment: 1 },
        aciertos: { increment: acierto ? 1 : 0 }, // ¡CORREGIDO! Usamos 'aciertos'
      },
      // 3. Data para CREAR (si la fila NO existe)
      create: {
        usuarioId,
        flashcardId,
        intentos: 1, // Primer intento
        aciertos: acierto ? 1 : 0, // Primer acierto
      },
    });
  }

  async estadisticas(usuarioId: number) {
    // Usamos AGGREGATE para sumar los contadores de todas las filas del usuario.
    const result = await this.prisma.progreso.aggregate({
      _sum: {
        intentos: true,
        aciertos: true, // ¡CORREGIDO! Usamos 'aciertos'
      },
      where: { usuarioId },
    });

    const totalIntentos = result._sum.intentos || 0;
    const totalAciertos = result._sum.aciertos || 0;

    return {
      total: totalIntentos, // Total de intentos acumulado
      aciertos: totalAciertos,
      porcentaje: totalIntentos > 0 ? (totalAciertos / totalIntentos) * 100 : 0,
    };
  }
}