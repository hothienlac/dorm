import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookAuthController } from './facebook-auth/facebook-auth.controller';

@Module({
  controllers: [AuthController, FacebookAuthController],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
