import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  section: string;

  @Prop({ required: true })
  topic: string;

  @Prop({ required: true })
  classDate: string;

  @Prop({ required: true })
  assignmentDate: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
