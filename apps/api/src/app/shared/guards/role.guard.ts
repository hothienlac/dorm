import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RequestContext } from '../../core/context';
import { AuthService } from '../../auth';

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(
		private readonly _reflector: Reflector,
		private readonly _authService: AuthService
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		return true
	}
}
