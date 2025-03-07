import { IsString, IsNumber } from 'class-validator';

export class CreateMarksDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  assignment: string;

  @IsNumber()
  marks: number;

  @IsString()
  grade: string;
}
