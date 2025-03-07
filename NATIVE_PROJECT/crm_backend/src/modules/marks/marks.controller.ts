
import { Controller, Post, Get, Body, Logger } from '@nestjs/common';
import { MarksService } from './marks.service';
import { CreateMarksDto } from './dto/create-marks.dto';
import { Marks } from './marks.schema';

@Controller('marks')
export class MarksController {
  private readonly logger = new Logger(MarksController.name);

  constructor(private readonly marksService: MarksService) {}

  @Post('/add')
  async submitMarks(@Body() createMarksDto: CreateMarksDto): Promise<Marks> {
    this.logger.log(`Received marks submission: ${JSON.stringify(createMarksDto)}`);
    return this.marksService.submitMarks(createMarksDto);
  }

  @Get('')
  async getAllMarks(): Promise<Marks[]> {
    return this.marksService.getAllMarks();
  }
}

