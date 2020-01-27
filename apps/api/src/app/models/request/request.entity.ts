// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import {
	Column,
	Entity,
	Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
    IsString,
	IsDate,
	IsBoolean,
} from 'class-validator';
import { IRequest } from '@dorm/models';

@Entity('request')
export class Request implements IRequest {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
    id: string;
    
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	sid: string;

	@ApiProperty({ type: Date })
	@IsDate()
    @IsNotEmpty()
	@Index()
	@Column()
	in: Date;
	
    @ApiProperty({ type: Date })
	@IsDate()
    @IsNotEmpty()
    @Index()
    @Column()
	out: Date;
	
	@ApiProperty({ type: Boolean })
	@IsBoolean()
    @IsNotEmpty()
    @Index()
    @Column()
    parent_active: boolean;
	
	@ApiProperty({ type: Boolean })
	@IsBoolean()
    @IsNotEmpty()
    @Index()
    @Column()
    admin_active: boolean;
}
