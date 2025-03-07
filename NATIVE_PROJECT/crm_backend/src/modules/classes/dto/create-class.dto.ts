import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty() @IsString()
  course: string;

  @IsNotEmpty() @IsString()
  section: string;

  @IsNotEmpty() @IsString()
  topic: string;

  @IsNotEmpty() @IsDateString()
  classDate: string;

  @IsNotEmpty() @IsDateString()
  assignmentDate: string;
}

export class UpdateClassDto {
  @IsOptional() @IsString()
  course?: string;

  @IsOptional() @IsString()
  section?: string;

  @IsOptional() @IsString()
  topic?: string;

  @IsOptional() @IsDateString()
  classDate?: string;

  @IsOptional() @IsDateString()
  assignmentDate?: string;
}
