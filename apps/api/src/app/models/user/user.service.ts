// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CrudService } from '../crud/crud.service';
import { UserEntity } from './user.entity';
import { IJwtToken } from '@dorm/models';

@Injectable()
export class UserService extends CrudService<UserEntity> {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
		) {
		super(userRepository);
		}

	async getLoggedUserOrCreate(token: IJwtToken): Promise<UserEntity | InsertResult> {
		const { email, name } = token;
		// const user = await this.userRepository.findOne({email});
		const user = await this.userRepository.findOne({ username: name });
		if (user) {
		  return user;
		} else {
			const newUser = {
				email: token.email,
				username: token.name,
			};
			return super.create(newUser);
		}
	}
}
