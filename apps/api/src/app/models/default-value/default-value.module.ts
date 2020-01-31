import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DefaultValueEntity } from "./default-value.entity";
import { DefaultValueService } from "./default-value.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([DefaultValueEntity]),
  ],
  providers: [DefaultValueService],
  exports: [DefaultValueService],
})
export class DefaultValueModule {}
