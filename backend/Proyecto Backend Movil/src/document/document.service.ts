import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class DocumentoService {
  constructor(private prisma: PrismaService) {}

  async crear(usuarioId: number, nombre: string, tipo: string) {
    return this.prisma.documento.create({
      data: { usuarioId, nombre, tipo },
    });
  }

  async listarPorUsuario(usuarioId: number) {
    return this.prisma.documento.findMany({ where: { usuarioId } });
  }
}
