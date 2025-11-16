import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserFromToken } from '../auth/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@UserFromToken() user: any) {
    return this.usersService.findById(user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me/preferences')
  async updatePrefs(
    @UserFromToken() user: any,
    @Body() body: { theme?: string; language?: string },
  ) {
    return this.usersService.updatePreferences(user.sub, body);
  }
}
