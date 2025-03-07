import { Controller, Post, Get, Body,  Patch, Param} from '@nestjs/common';
import { AssignmentService } from './assignment.service'; 
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from './assignment.schema'; 

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post('/addassignment')
  async createAssignment(@Body() createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    return this.assignmentService.createAssignment(createAssignmentDto);
  }

//   @Get()
//   async getAllAssignments(): Promise<Assignment[]> {
//     return this.assignmentService.getAllAssignments();
//   }

@Get('/')
  async getAllAssignments(): Promise<Assignment[]> {
    return this.assignmentService.getAllAssignments();
  }

  


}
