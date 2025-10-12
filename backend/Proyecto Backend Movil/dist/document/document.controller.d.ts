import { DocumentoService } from './document.service';
export declare class DocumentoController {
    private readonly documentoService;
    constructor(documentoService: DocumentoService);
    crear(body: any): Promise<{
        id: number;
        usuarioId: number;
        nombre: string;
        tipo: string;
        fechaCarga: Date;
    }>;
    listar(usuarioId: number): Promise<{
        id: number;
        usuarioId: number;
        nombre: string;
        tipo: string;
        fechaCarga: Date;
    }[]>;
}
