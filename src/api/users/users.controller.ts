import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './users.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async newUser(@Body() body ): Promise<any> {
    return await this.userService.createUser(body);
  }

  @Get('/:id')
  async getUser(@Param('id') id): Promise<any> {
    return await this.userService.getUser(id);
  }

  @Get()
  async getUsers() : Promise<any> {
    return await this.userService.getUsers();
  }

  @Put()
  async updateUser(@Body() body) : Promise<any> {
    return await this.userService.updateUser(body);
  }
}