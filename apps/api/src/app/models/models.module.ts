import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    DefaultValueEntity,
    DefaultValueService,

    FingerPrintEntity,
    FingerPrintService,

    FreeTimeEntity,
    FreeTimeService,

    InOutHistoryEntity,
    InOutHistoryService,

    RequestEntity,
    RequestService,

    RequestHistoryEntity,
    RequestHistoryService,


    UserEntity,
    ImageEntity,
    ProfileEntity,
    UserService,
} from '.';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DefaultValueEntity,
      UserEntity,
      FingerPrintEntity,
      FreeTimeEntity,
      InOutHistoryEntity,
      RequestEntity,
      RequestHistoryEntity,
      ImageEntity,
      ProfileEntity,
    ]),
  ],
  providers: [
    UserService,
    DefaultValueService,
    FingerPrintService,
    FreeTimeService,
    InOutHistoryService,
    RequestService,
    RequestHistoryService,
  ],
  exports: [
    UserService,
    DefaultValueService,
    FingerPrintService,
    FreeTimeService,
    InOutHistoryService,
    RequestService,
    RequestHistoryService,
  ],
})
export class ModelsModule {}
