import { Message } from "@dorm/api-interfaces";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getData(): Message {
    return { message: "Welcome Tan Tao University!" };
  }
}
