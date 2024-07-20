import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './dto/user.dto'
import { ZodValidationPipe } from './pipes/validation.pipes';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(UserDto))
  async create(@Body() createUserDto: UserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto:UserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
