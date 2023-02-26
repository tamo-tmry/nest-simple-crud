import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.article.findMany();
    return [...result];
  }

  @Post('')
  async add(@Body() article: CreateArticleDto) {
    await this.prisma.article.create({
      data: article,
    });

    return {
      success: 'true',
    };
  }
}
