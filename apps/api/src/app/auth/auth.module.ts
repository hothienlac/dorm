import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { FacebookAuthController } from './facebook-auth/facebook-auth.controller';

@Module({
  controllers: [AuthController, FacebookAuthController],
  providers: [
  ]
})
export class AuthModule {}
