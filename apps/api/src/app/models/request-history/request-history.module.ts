import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestHistoryEntity } from './request-history.entity';
import { RequestHistoryService } from './request-history.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestHistoryEntity]),
  ],
  providers: [RequestHistoryService],
  exports: [RequestHistoryService],
})
export class RequestHistoryModule {}
