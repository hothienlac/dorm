import { Module } from '@nestjs/common';

import {
  AdminModule,
  FingerPrintModule,
  ParentModule,
  SharedModule,
  StudentModule
} from '.';
import {
  DefaultValueEntity,
  FingerPrintEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
  RelationshipEntity,
  RequestEntity,
  RequestHistoryEntity,
  UserEntity,
} from '../models';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    AdminModule,
    StudentModule,
    ParentModule,
    FingerPrintModule,
    SharedModule,
  ],
})
export class ControllerModule {}
