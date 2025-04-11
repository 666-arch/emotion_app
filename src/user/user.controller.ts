import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation } from "@nestjs/swagger";
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '用户注册', description: '用户注册' })
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('==================', createUserDto);
    // return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
