import { IsNotEmpty } from 'class-validator';

export class UpdateArticleParamDto {
  @IsNotEmpty()
  id: string;
}

export class UpdateArticleBodyDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
