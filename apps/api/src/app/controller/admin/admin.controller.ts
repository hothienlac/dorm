// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Controller, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UUIDValidationPipe } from '../../shared';
import {
  CrudController,
  User,
  UserService,
} from '../../models'

@ApiTags('Admin')
@Controller()
export class AdminController extends CrudController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @ApiOperation({ summary: 'Find User by id.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<User> {
    return this.userService.findOne(id);
  }
}
