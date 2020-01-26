// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Relationship } from './relationship.entity';
import { CrudService } from '../crud/crud.service';

@Injectable()
export class RelationshipService extends CrudService<Relationship> {
	constructor(@InjectRepository(Relationship) relationshipRepository: Repository<Relationship>) {
		super(relationshipRepository);
	}

	async getRelationshipById(id: string): Promise<Relationship> {
		const relationship = await this.repository
			.createQueryBuilder('relationship')
			.where('relationship.id = :id', { id })
			.getOne();
		return relationship;
	}

	async checkIfExists(id: string): Promise<boolean> {
		const count = await this.repository
			.createQueryBuilder('relationship')
			.where('relationship.id = :id', { id })
			.getCount();
		return count > 0;
    }
    
	async createOne(relationship: Relationship): Promise<InsertResult> {
		return await this.repository.insert(relationship);
	}
}
