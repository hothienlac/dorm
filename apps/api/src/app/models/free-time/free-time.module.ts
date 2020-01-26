import { Module } from '@nestjs/common';
import { FreeTimeService } from './free-time.service';

@Module({
  providers: [FreeTimeService]
})
export class FreeTimeModule {}
