// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

export interface IUser {
	id: string; // USE PHONE NUMBER AS ID
	role: string;
}

export enum RolesEnum {
	ADMIN = 'ADMIN',
	STUDENT = ' STUDENT',
	PARENT = 'PARENT',
}
