// libs
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Get,
  UseGuards
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
// guards
import { AuthGuard } from './auth.guard';
// services
import { AuthService } from './auth.service';
// dto
import { SignInDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('logic')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Request() req) {
    return req.user;
  }
}
