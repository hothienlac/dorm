import { Module } from '@nestjs/common';
import { DefaultValueService } from './default-value.service';

@Module({
  providers: [DefaultValueService]
})
export class DefaultValueModule {}
