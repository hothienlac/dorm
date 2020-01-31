import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationshipEntity } from './relationship.entity';
import { RelationshipService } from './relationship.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RelationshipEntity]),
  ],
  providers: [RelationshipService],
  exports: [RelationshipService],
})
export class RelationshipModule {}
