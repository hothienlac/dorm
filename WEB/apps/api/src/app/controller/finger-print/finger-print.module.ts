import { Module } from '@nestjs/common';
import { FingerPrintController } from './finger-print.controller';

@Module({
  controllers: [FingerPrintController]
})
export class FingerPrintModule {}
