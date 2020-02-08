import { Entity } from '@app/shared';

export class Subscription extends Entity {
  id: number;
  endpoint: string;
  auth: string;
  p256dh: string;
  username: string;
  topics: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
