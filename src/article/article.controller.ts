import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('article')
export class ArticleController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.article.findMany();
    return [...result];
  }
}
