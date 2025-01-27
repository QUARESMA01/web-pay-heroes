import { Controller, Post, Body, Get, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt.auth.gaurd';

@Controller('user')
export class UserController {
constructor(private userService: UserService){}

@Post()
 async createUser(@Body() body: IUser): Promise<IUser> {
    return this.userService.createUser(body);
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<IUser | null> {
    return this.userService.getUserById(id);
  }
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<IUser | null> {
    return this.userService.getUserByEmail(email);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: Partial<IUser>): Promise<IUser | null> {
    return this.userService.updateUser(id, body);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<IUser | null> {
    return this.userService.deleteUser(id);
  }
}
