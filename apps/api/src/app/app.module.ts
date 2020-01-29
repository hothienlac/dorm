import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

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
import { AppRouting } from './app.routing';



@Module({
  imports: [
    RouterModule.forRoutes(AppRouting),
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
  providers: [AppService]
})
export class AppModule {}
