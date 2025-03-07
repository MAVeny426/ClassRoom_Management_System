import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarksController } from './marks.controller';
import { MarksService } from './marks.service';
import { MarksSchema } from './marks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Marks', schema: MarksSchema }])],
  controllers: [MarksController],
  providers: [MarksService],
})
export class MarksModule {}
