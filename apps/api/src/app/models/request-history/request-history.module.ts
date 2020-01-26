import { Module } from '@nestjs/common';
import { RequestHistoryService } from './request-history.service';

@Module({
  providers: [RequestHistoryService]
})
export class RequestHistoryModule {}
