import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
}


  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
  return this.usersService.login(loginUserDto);
  }
}
