import { PrismaService } from '../prisma/prisma.service';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    register(data: {
        nombre: string;
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: number;
            nombre: string;
            email: string;
            password: string;
            fechaRegistro: Date;
        };
    }>;
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        token: any;
        user: {
            id: number;
            nombre: string;
            email: string;
            password: string;
            fechaRegistro: Date;
        };
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        fechaRegistro: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        fechaRegistro: Date;
    }>;
}
