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
import { UsersService } from './users.service';
import { User } from './interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    return this.usersService.findAll(role);
  }

  @Get('/:id') // /users/:id
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }

  @Post() // /users
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }

  @Patch('/:id') // /users/:id
  update(@Param('id') id: string, @Body() user: User): User {
    return this.usersService.update(+id, user);
  }

  @Delete('/:id') // /users/:id
  delete(@Param('id') id: string): User {
    return this.usersService.delete(+id);
  }
}
