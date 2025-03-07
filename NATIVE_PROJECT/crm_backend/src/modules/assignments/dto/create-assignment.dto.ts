import { IsString, IsEmail,IsNumber, IsOptional, } from 'class-validator';

export class CreateAssignmentDto {
  @IsString() course: string;
  @IsString() section: string;
  @IsString() topic: string;
  @IsString() classDate: string;
  @IsString() assignmentDate: string;
  @IsString() name: string;
  @IsEmail() email: string;
  @IsString() assignment: string;
  @IsString() classId: string;
}

export class UpdateMarksDto {
  @IsNumber()
  marks: number;

  @IsString()
  @IsOptional()
  grade?: string;
}
