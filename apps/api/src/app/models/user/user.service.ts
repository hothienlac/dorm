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
		const { email, preferred_username } = token;
		// const user = await this.userRepository.findOne({email});
		const user = await this.userRepository.findOne({ username: preferred_username });
		if (user) {
		  return user;
		} else {
			const newUser = {
				firstName: token.given_name,
				lastName: token.family_name,
				email: token.email,
				username: token.preferred_username,
			};
			return super.create(newUser);
		}
	}
}
