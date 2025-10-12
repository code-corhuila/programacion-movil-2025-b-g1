import { Module } from '@nestjs/common';
import { ProgresoService } from './progress.service';
import { ProgresoController } from './progress.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProgresoController],
  providers: [ProgresoService],
})
export class ProgresoModule {}
