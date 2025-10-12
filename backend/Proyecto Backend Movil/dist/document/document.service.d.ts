import { PrismaService } from '../prisma/prisma.service';
export declare class DocumentoService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(usuarioId: number, nombre: string, tipo: string): Promise<{
        id: number;
        usuarioId: number;
        nombre: string;
        tipo: string;
        fechaCarga: Date;
    }>;
    listarPorUsuario(usuarioId: number): Promise<{
        id: number;
        usuarioId: number;
        nombre: string;
        tipo: string;
        fechaCarga: Date;
    }[]>;
}
