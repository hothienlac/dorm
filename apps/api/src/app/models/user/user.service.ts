// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { CrudService } from '../crud/crud.service';

@Injectable()
export class UserService extends CrudService<UserEntity> {
	constructor(@InjectRepository(UserEntity) userRepository: Repository<UserEntity>) {
		super(userRepository);
	}
}
