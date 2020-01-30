import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ModifyUserController } from './modify-user/modify-user.controller';
import { ModifyRelationshipController } from './modify-relationship/modify-relationship.controller';
import { ModifyDefaultValueController } from './modify-default-value/modify-default-value.controller';
import {
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
