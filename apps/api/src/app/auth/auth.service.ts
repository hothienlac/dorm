import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { User, UserService } from '../models';
import { environment as env, environment } from '@env-api/environment';

export enum Provider {
	GOOGLE = 'google',
	FACEBOOK = 'facebook'
}

@Injectable()
export class AuthService {
	saltRounds: number;

	constructor(private readonly userService: UserService) {
		this.saltRounds = env.USER_PASSWORD_BCRYPT_SALT_ROUNDS;
	}
}
