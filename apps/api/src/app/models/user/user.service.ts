// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CrudService } from '../crud/crud.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService extends CrudService<UserEntity> {
	constructor(@InjectRepository(UserEntity) userRepository: Repository<UserEntity>) {
		super(userRepository);
	}
}
