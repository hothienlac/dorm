import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import {
  UserModule,
  FingerPrintModule,
  FreeTimeModule,
  DefaultValueModule,
  InOutHistoryModule,
  RelationshipModule,
  RequestModule,
  RequestHistoryModule
} from './models';
import { WebsocketModule } from './websocket/websocket.module';
import { ControllerModule } from './controller/controller.module';



@Module({
  imports: [
    // AuthModule,
    // CoreModule,
    // SharedModule,
    // UserModule,
    // FingerPrintModule,
    // FreeTimeModule,
    // DefaultValueModule,
    // InOutHistoryModule,
    // RelationshipModule,
    // RequestModule,
    // RequestHistoryModule,
    // WebsocketModule,
    // ControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
