import { Module } from '@nestjs/common';
import { FingerPrintService } from './finger-print.service';

@Module({
  providers: [FingerPrintService]
})
export class FingerPrintModule {}
