import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, LoginUserDto } from './users.dto';
import { User } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userCount = await this.userModel.countDocuments();

    createUserDto.userType = userCount === 0 ? 'admin' : 'user';

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    return this.userModel.create(createUserDto);
  }

  async findUserByUsername(userName: string): Promise<User | null> {
    return this.userModel.findOne({ userName }).exec();
  }

  async login(loginUserDto: LoginUserDto) {
    const { userName, password } = loginUserDto;

    if (!userName || !password) {
      throw new BadRequestException('Username and password are required');
    }

    const user = await this.findUserByUsername(userName);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    console.log(`🔹 Stored Hashed Password: ${user.password}`);
    console.log(`🔹 Entered Password: ${password}`);

    const isPasswordValid = await bcrypt.compare(String(password), user.password);
    console.log('🔹 Password Match:', isPasswordValid);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    return { message: 'Login successful', userType: user.userType };
  }
  
}
