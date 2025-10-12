import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProgresoService } from './progress.service';

@Controller('progreso')
export class ProgresoController {
  constructor(private readonly progresoService: ProgresoService) {}

  @Post()
  registrar(@Body() data: { usuarioId: number; flashcardId: number; acierto: boolean }) {
    return this.progresoService.registrar(data.usuarioId, data.flashcardId, data.acierto);
  }

  @Get(':usuarioId')
  estadisticas(@Param('usuarioId') usuarioId: string) {
    return this.progresoService.estadisticas(Number(usuarioId));
  }
}
