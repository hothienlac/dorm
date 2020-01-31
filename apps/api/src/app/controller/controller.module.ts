import { Module } from '@nestjs/common';

import {
  AdminModule,
  FingerPrintModule,
  ParentModule,
  SharedModule,
  StudentModule,
} from '.';
import { ControllerController } from './controller.controller';

@Module({
  imports: [
    AdminModule,
    StudentModule,
    ParentModule,
    FingerPrintModule,
    SharedModule,
  ],
  // controllers: [ControllerController],
})
export class ControllerModule {}
