import { Controller, Get } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('list')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('create')
  create(): Promise<InsertResult> | Record<string, never> {
    return this.usersService.create();
  }
}
