import { Schema, Document } from 'mongoose';

export const AssignmentSchema = new Schema({
  course: { type: String, required: true },
  section: { type: String, required: true },
  topic: { type: String, required: true },
  classDate: { type: String, required: true },
  assignmentDate: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  assignment: { type: String, required: true },
  classId: { type: String, required: true }
});

export interface Assignment extends Document {
  course: string;
  section: string;
  topic: string;
  classDate: string;
  assignmentDate: string;
  name: string;
  email: string;
  assignment: string;
  classId: string;
}
