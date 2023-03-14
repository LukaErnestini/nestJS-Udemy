import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  create(@Body() { email, password }: CreateUserDto) {
    return this.usersService.create(email, password);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get()
  findAll(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
