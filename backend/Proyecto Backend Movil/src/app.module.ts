import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './user/user.module';
import { DocumentoModule } from './document/document.module';
import { FlashcardModule } from './flashcard/flashcard.module';
import { ProgresoModule } from './progress/progress.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UsuarioModule,
    DocumentoModule,
    FlashcardModule,
    ProgresoModule,
  ],
})
export class AppModule {}
