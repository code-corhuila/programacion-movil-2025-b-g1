import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { DocumentoService } from './document.service';



@Controller('documentos')
export class DocumentoController {
  constructor(private readonly documentoService: DocumentoService) {}

  @Post()
  crear(@Body() body) {
    return this.documentoService.crear(body.usuarioId, body.nombre, body.tipo);
  }

  @Get()
  listar(@Query('usuarioId') usuarioId: number) {
    return this.documentoService.listarPorUsuario(Number(usuarioId));
  }
}
