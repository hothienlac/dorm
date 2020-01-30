import { Injectable, InternalServerErrorException, NotImplementedException } from '@nestjs/common';
import { get, post, Response } from 'request';
import { JsonWebTokenError, sign, verify } from 'jsonwebtoken';

import { User, UserService } from '../user';
import { environment as env, environment } from '@env-api/environment';
import { UserRegistrationInput as IUserRegistrationInput } from '@gauzy/models';

export enum Provider {
	FACEBOOK = 'facebook'
}

@Injectable()
export class AuthService {

	constructor(private readonly userService: UserService) {
	}

	async hasRole(token: string, roles: string[] = []): Promise<boolean> {
		throw new NotImplementedException();
	}

	async validateOAuthLoginEmail(
		emails: Array<{ value: string; verified: boolean }>
	): Promise<{
		success: boolean;
		authData: { jwt: string; userId: string };
	}> {
		let response = {
			success: false,
			authData: { jwt: null, userId: null }
		};

		try {
			for (const { value } of emails) {
				const userExist = await this.userService.checkIfExistsEmail(
					value
				);
				if (userExist) {
					const user = await this.userService.getUserByEmail(value);
					const userId = user.id;
					const userRole = user.role ? user.role.name : '';
					const payload = { id: userId, role: userRole };
					const jwt: string = sign(payload, env.JWT_SECRET, {});
					response = { success: true, authData: { jwt, userId } };
				}
			}
			return response;
		} catch (err) {
			throw new InternalServerErrorException(
				'validateOAuthLoginEmail',
				err.message
			);
		}
	}
	
	async requestFacebookRedirectUri(): Promise<{ redirectUri: string }> {
		const {
			clientId,
			oauthRedirectUri,
			state,
			loginDialogUri
		} = env.facebookConfig;

		const queryParams: string[] = [
			`client_id=${clientId}`,
			`redirect_uri=${oauthRedirectUri}`,
			`state=${state}`
		];

		const redirectUri = `${loginDialogUri}?${queryParams.join('&')}`;

		return { redirectUri };
	}

	async facebookSignIn(code: string, responseRedirectUse: any): Promise<any> {
		const {
			clientId,
			oauthRedirectUri,
			clientSecret,
			accessTokenUri
		} = env.facebookConfig;

		const queryParams: string[] = [
			`client_id=${clientId}`,
			`redirect_uri=${oauthRedirectUri}`,
			`client_secret=${clientSecret}`,
			`code=${code}`
		];

		const uri = `${accessTokenUri}?${queryParams.join('&')}`;
		get(uri, (error: Error, res: Response, body: any) => {
			if (error) {
				console.error(error);
				throw error;
			} else if (body.error) {
				console.error(body.error);
				throw body.error;
			}

			const { access_token } = JSON.parse(body);
			const { host, port } = environment;

			post(
				{
					url: `${host}:${port}/api/auth/facebook/token`,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					form: { access_token }
				},
				async (error: Error, res: Response, body: any) => {
					if (error) {
						console.error(error);
						throw error;
					} else if (body.error) {
						console.error(body.error);
						throw body.error;
					}

					const redirectSuccessUrl = body.replace(
						'Found. Redirecting to ',
						''
					);
					return responseRedirectUse.redirect(redirectSuccessUrl);
				}
			);
		});
	}
}
