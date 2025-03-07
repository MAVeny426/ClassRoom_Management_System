import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: "http://localhost:8081",
    credentials: true
  }));

  app.use(cookieParser());

  await mongoose.connect('mongodb://localhost:27017/CRM_NATIVE_PROJECT')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Failed:', err));

  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
}

bootstrap();