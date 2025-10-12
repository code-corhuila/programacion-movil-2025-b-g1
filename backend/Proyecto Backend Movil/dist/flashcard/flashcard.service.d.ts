import { PrismaService } from '../prisma/prisma.service';
export declare class FlashcardService {
    private prisma;
    constructor(prisma: PrismaService);
    generar(documentoId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    listar(documentoId: number): Promise<{
        id: number;
        pregunta: string;
        respuesta: string;
        documentoId: number;
        tema: string | null;
        fechaCreacion: Date;
    }[]>;
}
