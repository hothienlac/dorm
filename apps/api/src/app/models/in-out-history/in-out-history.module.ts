import { Module } from '@nestjs/common';
import { InOutHistoryService } from './in-out-history.service';

@Module({
  providers: [InOutHistoryService]
})
export class InOutHistoryModule {}
