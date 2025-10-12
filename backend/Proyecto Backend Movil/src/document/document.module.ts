import { Module } from '@nestjs/common';
import { DocumentoService } from './document.service';
import { DocumentoController } from './document.controller';

@Module({
  controllers: [DocumentoController],
  providers: [DocumentoService],
})
export class DocumentoModule {}
