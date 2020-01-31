import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FingerPrintEntity } from "./finger-print.entity";
import { FingerPrintService } from "./finger-print.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([FingerPrintEntity]),
  ],
  providers: [FingerPrintService],
  exports: [FingerPrintService],
})
export class FingerPrintModule {}
