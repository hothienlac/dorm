import { Module } from '@nestjs/common';

import {
  AdminModule,
  FingerPrintModule,
  ParentModule,
  SharedModule,
  StudentModule
} from '.';

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
