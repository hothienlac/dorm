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
	IsDate,
	IsBoolean,
} from 'class-validator';
import { IRequestHistory } from '@dorm/models';

@Entity('request-history')
export class RequestHistory implements IRequestHistory {
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
    id: string;
    
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	uid: string;

	@ApiPropertyOptional({ type: Date })
	@IsDate()
    @IsNotEmpty()
	@Index()
	@Column()
	time: Date;
	
	@ApiProperty({ type: Boolean })
	@IsBoolean()
    @IsNotEmpty()
    @Index()
    @Column()
    active: boolean;
}
