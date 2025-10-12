import { Module } from '@nestjs/common';
import { UsuarioController } from './user.controller';
import { UsuarioService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
