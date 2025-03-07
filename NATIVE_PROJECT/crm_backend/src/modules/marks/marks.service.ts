import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marks } from './marks.schema';
import { CreateMarksDto } from './dto/create-marks.dto';

@Injectable()
export class MarksService {
  private readonly logger = new Logger(MarksService.name);

  constructor(@InjectModel('Marks') private readonly marksModel: Model<Marks>) {}

  async submitMarks(createMarksDto: CreateMarksDto): Promise<Marks> {
    try {
      this.logger.log('Saving marks to database', JSON.stringify(createMarksDto));
      const marksEntry = new this.marksModel(createMarksDto);
      return await marksEntry.save();
    } catch (error) {
      this.logger.error('Error saving marks', error.message);
      throw error;
    }
  }

  async getAllMarks(): Promise<Marks[]> {
    return this.marksModel.find().exec();
  }
}

