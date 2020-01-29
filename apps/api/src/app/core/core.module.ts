import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '../config';
import { environment as env } from '@env-api/environment';
import {
  FingerPrintEntity,
  DefaultValueEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
  RelationshipEntity,
  RequestEntity,
  RequestHistoryEntity,
  UserEntity,
} from '../models';

const entities = [
  DefaultValueEntity,
  FingerPrintEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
  RelationshipEntity,
  RequestEntity,
  RequestHistoryEntity,
  UserEntity,
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
			inject: [ConfigService]
		}),
  ],
  providers: [CoreService],
})
export class CoreModule {}
