import { Module } from '@nestjs/common';
import { RelationshipService } from './relationship.service';

@Module({
  providers: [RelationshipService]
})
export class RelationshipModule {}
