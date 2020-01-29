import { Module } from '@nestjs/common';
import { DefaultValueService } from './default-value.service';
import { DefaultValueEntity } from './default-value.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DefaultValueEntity]),
  ],
  providers: [DefaultValueService],
  exports: [DefaultValueService],
})
export class DefaultValueModule {}
