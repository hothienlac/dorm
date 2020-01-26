import { Module } from '@nestjs/common';
import { RequestService } from './request.service';

@Module({
  providers: [RequestService]
})
export class RequestModule {}
