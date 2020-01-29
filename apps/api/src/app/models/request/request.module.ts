import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from './request.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestEntity]),
  ],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}
