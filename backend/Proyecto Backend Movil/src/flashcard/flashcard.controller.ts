import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { FlashcardService } from './flashcard.service';

@Controller('flashcards')
export class FlashcardController {
  constructor(private readonly flashcardService: FlashcardService) {}

  @Post('generar')
  generar(@Body('documentoId') documentoId: number) {
    return this.flashcardService.generar(documentoId);
  }

  @Get()
  listar(@Query('documentoId') documentoId: number) {
    return this.flashcardService.listar(Number(documentoId));
  }
}
