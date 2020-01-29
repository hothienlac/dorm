import { Module } from '@nestjs/common';
import { InOutHistoryService } from './in-out-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InOutHistoryEntity } from './in-out-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InOutHistoryEntity]),
  ],
  providers: [InOutHistoryService],
  exports: [InOutHistoryService],
})
export class InOutHistoryModule {}
