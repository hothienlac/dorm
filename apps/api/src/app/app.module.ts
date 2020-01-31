import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ControllerModule } from './controller/controller.module';
import {
  DefaultValueModule,
  FingerPrintModule,
  FreeTimeModule,
  InOutHistoryModule,
  RelationshipModule,
  RequestHistoryModule,
  RequestModule,
  UserModule,
} from './models';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    // AuthModule,
    CoreModule,
    SharedModule,
    UserModule,
    FingerPrintModule,
    FreeTimeModule,
    DefaultValueModule,
    InOutHistoryModule,
    RelationshipModule,
    RequestModule,
    RequestHistoryModule,
    WebsocketModule,
    ControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
