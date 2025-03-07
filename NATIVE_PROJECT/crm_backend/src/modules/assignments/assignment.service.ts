import { Injectable  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment } from './assignment.schema';
import { CreateAssignmentDto } from './dto/create-assignment.dto';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectModel('Assignment') private readonly assignmentModel: Model<Assignment>,
  ) {}

  async createAssignment(createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    try {
      console.log("Incoming Assignment Data:", createAssignmentDto);
      const createdAssignment = new this.assignmentModel(createAssignmentDto);
      return await createdAssignment.save();
    } catch (error) {
      console.error("Error in createAssignment:", error);
      throw new Error("Failed to create assignment");
    }
  }
  

  async getAllAssignments(): Promise<Assignment[]> {
    return this.assignmentModel.find().exec();
  }
  
  
}
