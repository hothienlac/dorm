import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { ParentModule } from './parent/parent.module';
import { FingerPrintModule } from './finger-print/finger-print.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AdminModule, StudentModule, ParentModule, FingerPrintModule, SharedModule]
})
export class ControllerModule {}
