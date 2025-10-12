import { PrismaService } from '../prisma/prisma.service';
export declare class ProgresoService {
    private prisma;
    constructor(prisma: PrismaService);
    registrar(usuarioId: number, flashcardId: number, acierto: boolean): Promise<{
        id: number;
        usuarioId: number;
        flashcardId: number;
        intentos: number;
        aciertos: number;
    }>;
    estadisticas(usuarioId: number): Promise<{
        total: number;
        aciertos: number;
        porcentaje: number;
    }>;
}
