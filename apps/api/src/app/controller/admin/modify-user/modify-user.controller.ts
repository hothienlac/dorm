// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Controller, Get, HttpStatus, Param, Put, HttpCode, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CrudController,
  UserEntity,
  UserService,
} from '../../../models';
import { UUIDValidationPipe } from '../../../shared';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@ApiTags('ModifyUser')
@Controller('admin/modify-user')
export class ModifyUserController extends CrudController<UserEntity> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  /////////////////////////////////////////////////////////////////////////////

  @ApiOperation({ summary: 'Find User by id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: UserEntity })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<UserEntity> {
    return this.userService.findOne(id);
  }
}
