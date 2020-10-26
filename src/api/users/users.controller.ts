import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './users.service';
import { Users } from './users.interface'

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async newUser(@Body() body: Users ): Promise<any> {
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

  @Put('/:id')
  async updateUser(@Body() body: Users, @Param('id') id) : Promise<any> {
    return await this.userService.updateUser(body, id);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id) : Promise<any> {
    return await this.userService.deleteUser(id);
  }
}