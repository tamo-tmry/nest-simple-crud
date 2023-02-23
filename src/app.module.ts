import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ArticleController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
