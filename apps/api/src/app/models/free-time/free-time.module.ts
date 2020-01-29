import { Module } from '@nestjs/common';
import { FreeTimeService } from './free-time.service';
import { FreeTimeEntity } from './free-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([FreeTimeEntity]),
  ],
  providers: [FreeTimeService],
  exports: [FreeTimeService],
})
export class FreeTimeModule {}
