import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from './assignment.service';  //  // ;
import { AssignmentSchema } from './assignment.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema }])],
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
