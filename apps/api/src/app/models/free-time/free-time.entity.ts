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
} from 'class-validator';
import { IFreeTime } from '@dorm/models';

@Entity('free-time')
export class FreeTime implements IFreeTime {
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
	sid: string;
	
    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    begin: string;

    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    end: string;
}
