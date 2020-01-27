import { Injectable } from '@nestjs/common';
import { Message } from '@dorm/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome Tan Tao University!' };
  }
}
