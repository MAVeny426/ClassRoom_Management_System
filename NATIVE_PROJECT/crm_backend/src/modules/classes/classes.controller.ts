import { Controller, Post, Get, Patch, Delete, Body, Param, BadRequestException, NotFoundException } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto, UpdateClassDto } from './dto/create-class.dto';
import { isValidObjectId } from 'mongoose';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post('create')
  async create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  async findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid class ID format');
    }
    return this.classesService.updateClass(id, updateClassDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid class ID format');
    }
    return this.classesService.deleteClass(id);
  }
}
