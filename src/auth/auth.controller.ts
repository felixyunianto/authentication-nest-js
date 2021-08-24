import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.do';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
    async login(@Body() authLoginDto : AuthLoginDto){
      return this.authService.login(authLoginDto)
    }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test(){
    return 'success';
  }
}
