import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module'; 
import { ClassesModule } from './modules/classes/classes.module'
import { AssignmentModule } from './modules/assignments/assignment.module'; 
import { MarksModule } from './modules/marks/marks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/CRM_NATIVE_PROJECT'),
    UsersModule,
    ClassesModule,
    AssignmentModule,
    MarksModule
  ],
})
export class AppModule {}

