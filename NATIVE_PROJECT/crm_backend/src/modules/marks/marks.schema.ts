import { Schema, Document } from 'mongoose';

export const MarksSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  assignment: { type: String, required: true },
  marks: { type: Number, required: true },
  grade: { type: String, required: true },
});

export interface Marks extends Document {
  name: string;
  email: string;
  assignment: string;
  marks: number;
  grade: string;
}
