import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth';
import { ControllerModule } from './controller/controller.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {
  ModelsModule,
} from './models';
import { WebsocketModule } from './websocket/websocket.module';
import { TerminusModule } from '@nestjs/terminus';
import { AppHealthService } from './app-health.service';

@Module({
  imports: [
    AuthModule,
    CoreModule,
    SharedModule,
    ModelsModule,
    WebsocketModule,
    ControllerModule,
    TerminusModule.forRootAsync({
      useClass: AppHealthService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
