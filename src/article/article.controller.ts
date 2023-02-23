import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get('list')
  getList() {
    return [
      {
        title: 'article title',
        content: 'article content',
        created: '',
      },
    ];
  }
}
