import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './create-article.dto';
import { DeleteArticleDto } from './delete-article.dto';
import {
  UpdateArticleParamDto,
  UpdateArticleBodyDto,
} from './update-article.dto';

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

  @Patch(':id')
  async update(
    @Param() param: UpdateArticleParamDto,
    @Body() article: UpdateArticleBodyDto,
  ) {
    await this.prisma.article.update({
      data: article,
      where: {
        id: parseInt(param.id),
      },
    });

    return {
      success: 'true',
    };
  }

  @Delete(':id')
  async delete(@Param() param: DeleteArticleDto) {
    await this.prisma.article.delete({
      where: {
        id: parseInt(param.id),
      },
    });

    return {
      success: 'true',
    };
  }
}
