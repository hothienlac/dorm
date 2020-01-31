import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../../auth';
import { RequestContext } from '../../core/context';

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(
		private readonly _reflector: Reflector,
		private readonly _authService: AuthService,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		return true;
	}
}
