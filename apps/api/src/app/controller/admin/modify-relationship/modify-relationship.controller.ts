// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Controller, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UUIDValidationPipe } from '../../../shared';
import {
  CrudController,
  Relationship,
  RelationshipService,
} from '../../../models'

@ApiTags('ModifyRelationship')
@Controller('modify-relationship')
export class ModifyRelationshipController extends CrudController<Relationship> {
  constructor(private readonly relationshipService: RelationshipService) {
    super(relationshipService);
  }

  @ApiOperation({ summary: 'Find Relationship by id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Relationship })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<Relationship> {
    return this.relationshipService.findOne(id);
  }
}
