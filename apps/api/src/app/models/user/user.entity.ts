// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import {
	Column,
	Entity,
	Index,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
	IsEnum,
} from 'class-validator';
import { IUser, RolesEnum } from '@dorm/models';

@Entity('user-entity')
export class UserEntity implements IUser {
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	id: string;
	
    @ApiProperty({ type: String, enum: RolesEnum })
    @IsEnum(RolesEnum)
    @IsNotEmpty()
    @Index()
    @Column()
    role: string;
}
