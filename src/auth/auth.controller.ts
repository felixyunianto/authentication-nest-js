import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.do';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() authLoginDto: AuthLoginDto,
  ) {
    return this.authService.login(authLoginDto, response);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'success';
  }
}
