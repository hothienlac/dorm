// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Controller, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UUIDValidationPipe } from '../../../shared';
import {
  CrudController,
  UserEntity,
  UserService,
} from '../../../models'

@ApiTags('ModifyUser')
@Controller('admin/modify-user')
export class ModifyUserController extends CrudController<UserEntity> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @ApiOperation({ summary: 'Find User by id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: UserEntity })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<UserEntity> {
    return this.userService.findOne(id);
  }
}
