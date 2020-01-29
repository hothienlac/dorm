import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ModifyUserController } from './modify-user/modify-user.controller';
import { ModifyRelationshipController } from './modify-relationship/modify-relationship.controller';
import { ModifyDefaultValueController } from './modify-default-value/modify-default-value.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DefaultValueEntity,
  UserEntity,
  RelationshipEntity,
  DefaultValueModule,
  FingerPrintModule,
  FreeTimeModule,
  InOutHistoryModule,
  RelationshipModule,
  RequestModule,
  RequestHistoryModule,
  UserModule
} from '../../models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      DefaultValueEntity,
      RelationshipEntity,
    ]),
    DefaultValueModule,
    FingerPrintModule,
    FreeTimeModule,
    InOutHistoryModule,
    RelationshipModule,
    RequestModule,
    RequestHistoryModule,
    UserModule,
  ],
  controllers: [
    AdminController,
    ModifyUserController,
    ModifyRelationshipController,
    ModifyDefaultValueController,
  ],
})
export class AdminModule {}
