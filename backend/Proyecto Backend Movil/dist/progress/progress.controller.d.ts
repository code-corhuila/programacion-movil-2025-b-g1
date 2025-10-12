import { ProgresoService } from './progress.service';
export declare class ProgresoController {
    private readonly progresoService;
    constructor(progresoService: ProgresoService);
    registrar(data: {
        usuarioId: number;
        flashcardId: number;
        acierto: boolean;
    }): Promise<{
        id: number;
        usuarioId: number;
        flashcardId: number;
        intentos: number;
        aciertos: number;
    }>;
    estadisticas(usuarioId: string): Promise<{
        total: number;
        aciertos: number;
        porcentaje: number;
    }>;
}
