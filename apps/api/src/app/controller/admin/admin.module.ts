import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ModifyUserController } from './modify-user/modify-user.controller';
import { ModifyRelationshipController } from './modify-relationship/modify-relationship.controller';
import { ModifyDefaultValueController } from './modify-default-value/modify-default-value.controller';

@Module({
  controllers: [AdminController, ModifyUserController, ModifyRelationshipController, ModifyDefaultValueController]
})
export class AdminModule {}
