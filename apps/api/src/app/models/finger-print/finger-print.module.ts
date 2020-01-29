import { Module } from '@nestjs/common';
import { FingerPrintService } from './finger-print.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FingerPrintEntity } from './finger-print.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FingerPrintEntity]),
  ],
  providers: [FingerPrintService],
  exports: [FingerPrintService],
})
export class FingerPrintModule {}
