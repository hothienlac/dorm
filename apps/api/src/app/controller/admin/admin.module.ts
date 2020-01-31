import { Module } from '@nestjs/common';
import {
  DefaultValueModule,
  FingerPrintModule,
  FreeTimeModule,
  InOutHistoryModule,
  RelationshipModule,
  RequestHistoryModule,
  RequestModule,
  UserModule,
} from '../../models';
import { AdminController } from './admin.controller';
import { ModifyDefaultValueController } from './modify-default-value/modify-default-value.controller';
import { ModifyRelationshipController } from './modify-relationship/modify-relationship.controller';
import { ModifyUserController } from './modify-user/modify-user.controller';

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
