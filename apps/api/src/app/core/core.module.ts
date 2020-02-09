import { environment as env } from '@env-api/environment';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '../config';
import {
  DefaultValueEntity,
  FingerPrintEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
  RequestEntity,
  RequestHistoryEntity,
  UserEntity,
  ImageEntity,
  ProfileEntity,
} from '../models';
import { CoreService } from './core.service';

const entities = [
  DefaultValueEntity,
  UserEntity,
  FingerPrintEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
  RequestEntity,
  RequestHistoryEntity,
  ImageEntity,
  ProfileEntity,
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (config: ConfigService): TypeOrmModuleOptions => ({
				...env.database,
				entities,
				// subscribers,
				// migrations,
			}),
			inject: [ConfigService],
		}),
  ],
  providers: [CoreService],
})
export class CoreModule {}
