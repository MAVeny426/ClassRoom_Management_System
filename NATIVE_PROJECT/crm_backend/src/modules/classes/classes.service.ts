import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class, ClassDocument } from './classes.schema';
import { CreateClassDto, UpdateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassesService {
  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>) {}

  async create(createClassDto: CreateClassDto): Promise<ClassDocument> {
    const newClass = new this.classModel(createClassDto);
    return newClass.save();
  }

  async findAll(): Promise<ClassDocument[]> {
    return this.classModel.find().exec();
  }

  async findOne(id: string): Promise<ClassDocument> {
    const foundClass = await this.classModel.findById(id).exec();
    if (!foundClass) throw new NotFoundException('Class not found');
    return foundClass;
  }

  async updateClass(id: string, updateClassDto: UpdateClassDto): Promise<Class> {
    const updatedClass = await this.classModel.findByIdAndUpdate(id, updateClassDto, { new: true }).exec();
    if (!updatedClass) throw new NotFoundException('Class not found');
    return updatedClass;
  }

  async deleteClass(id: string): Promise<{ message: string }> {
    const deletedClass = await this.classModel.findByIdAndDelete(id).exec();
    if (!deletedClass) throw new NotFoundException('Class not found');
    return { message: 'Class deleted successfully' };
  }
}
