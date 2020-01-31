import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InOutHistoryEntity } from "./in-out-history.entity";
import { InOutHistoryService } from "./in-out-history.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([InOutHistoryEntity]),
  ],
  providers: [InOutHistoryService],
  exports: [InOutHistoryService],
})
export class InOutHistoryModule {}
