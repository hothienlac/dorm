import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreeTimeEntity } from './free-time.entity';
import { FreeTimeService } from './free-time.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FreeTimeEntity]),
  ],
  providers: [FreeTimeService],
  exports: [FreeTimeService],
})
export class FreeTimeModule {}
