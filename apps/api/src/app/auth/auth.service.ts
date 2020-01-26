import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { get, post, Response } from 'request';
import { JsonWebTokenError, sign, verify } from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';

import { User, UserService } from '../user';
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
