import { IsNotEmpty } from 'class-validator';

export class DeleteArticleDto {
  @IsNotEmpty()
  id: string;
}
