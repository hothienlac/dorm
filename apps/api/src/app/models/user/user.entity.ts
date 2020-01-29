// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import {
	Column,
	Entity,
	Index,
	PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
	IsEnum,
} from 'class-validator';
import { IUser, RolesEnum } from '@dorm/models';

@Entity('user-entity')
export class UserEntity implements IUser {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@PrimaryColumn()
	id: string;
	
    @ApiProperty({ type: String, enum: RolesEnum })
    @IsEnum(RolesEnum)
    @IsNotEmpty()
    @Index()
    @Column()
    role: string;
}
