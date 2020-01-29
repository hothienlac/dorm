import { Module } from '@nestjs/common';
import { RelationshipService } from './relationship.service';
import { RelationshipEntity } from './relationship.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([RelationshipEntity]),
  ],
  providers: [RelationshipService],
  exports: [RelationshipService],
})
export class RelationshipModule {}
