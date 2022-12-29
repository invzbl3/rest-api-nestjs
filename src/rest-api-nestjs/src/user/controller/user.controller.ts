import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserDto } from '../dto/user.dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/')
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get('/')
  findAll(): User[] {
    return this.userService.findAll();
  }
}
