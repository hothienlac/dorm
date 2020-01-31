import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RequestEntity } from "./request.entity";
import { RequestService } from "./request.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestEntity]),
  ],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}
