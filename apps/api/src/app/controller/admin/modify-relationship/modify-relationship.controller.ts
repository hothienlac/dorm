// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Controller, Get, HttpStatus, Param, Put, HttpCode, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CrudController,
  RelationshipEntity,
  RelationshipService,
  UserEntity,
  UserService,
} from '../../../models';
import { UUIDValidationPipe } from '../../../shared';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@ApiTags('ModifyRelationship')
@Controller('admin/modify-relationship')
export class ModifyRelationshipController extends CrudController<RelationshipEntity> {
  	constructor(
	  private readonly relationshipService: RelationshipService,
	  private readonly userService: UserService,
	) {
    super(relationshipService);
  }

  /////////////////////////////////////////////////////////////////////////////

  @ApiOperation({ summary: 'Find Relationship by id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: RelationshipEntity })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<RelationshipEntity> {
    return this.relationshipService.findOne(id);
  }

  /////////////////////////////////////////////////////////////////////////////

  @ApiOperation({ summary: 'Find parents by student id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found records', type: UserEntity })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get('find-parents/:id')
  async findParents(@Param('id', UUIDValidationPipe) id: string): Promise<UserEntity> {
	const parentsId = this.relationshipService.findOne(id);
	const where = { id: parentsId};
	return this.userService.findAll({ where })
  }

}