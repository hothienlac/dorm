import { Module } from '@nestjs/common';
import { RequestHistoryService } from './request-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestHistoryEntity } from './request-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestHistoryEntity]),
  ],
  providers: [RequestHistoryService],
  exports: [RequestHistoryService],
})
export class RequestHistoryModule {}
