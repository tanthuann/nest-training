// libs
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// modules
import { UsersModule } from 'src/users/users.module';
// guards
import { AuthGuard } from './auth.guard';
// services
import { AuthService } from './auth.service';
// controllers
import { AuthController } from './auth.controller';
// constants
import { jwtConstants } from './auth.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      // TODO: pls set only 60s
      signOptions: { expiresIn: '1y' }
    })
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
