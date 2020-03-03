import { Controller, Get, Query, Body, Post } from '@nestjs/common';

import { MessengerService } from './facebook-messenger/messenger.service';

@Controller()
export class AppController {
  constructor( private readonly messengerService: MessengerService ) {}

  @Get('hello')
  async getData() {
    return await this.messengerService.hello();
  }

  @Get('webhook')
  async webhook_get(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
    ) {
    return await this.messengerService.webhook_get(mode, token, challenge);
  }

  @Post('webhook')
  async webhook_post(@Body() body: any) {
    return await this.messengerService.webhook_post(body)
  }

}
