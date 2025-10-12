import { FlashcardService } from './flashcard.service';
export declare class FlashcardController {
    private readonly flashcardService;
    constructor(flashcardService: FlashcardService);
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
