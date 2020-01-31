// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";
import { CrudService } from "../crud/crud.service";
import { RelationshipEntity } from "./relationship.entity";

@Injectable()
export class RelationshipService extends CrudService<RelationshipEntity> {
	constructor(@InjectRepository(RelationshipEntity) relationshipRepository: Repository<RelationshipEntity>) {
		super(relationshipRepository);
	}

	async getRelationshipById(id: string): Promise<RelationshipEntity> {
		const relationship = await this.repository
			.createQueryBuilder("relationship")
			.where("relationship.id = :id", { id })
			.getOne();
		return relationship;
	}

	async checkIfExists(id: string): Promise<boolean> {
		const count = await this.repository
			.createQueryBuilder("relationship")
			.where("relationship.id = :id", { id })
			.getCount();
		return count > 0;
    }

	async createOne(relationship: RelationshipEntity): Promise<InsertResult> {
		return await this.repository.insert(relationship);
	}
}
