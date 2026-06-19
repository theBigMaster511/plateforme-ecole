import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommunicationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { title: string; content: string; target: string }, ecoleId: string) {
    return this.prisma.communication.create({
      data: {
        title: dto.title,
        content: dto.content,
        target: dto.target || 'all',
        ecoleId,
      },
    });
  }

  async findAll(ecoleId: string) {
    return this.prisma.communication.findMany({
      where: { ecoleId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
