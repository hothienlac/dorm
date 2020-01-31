// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IFreeTime } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
} from 'class-validator';
import {
	Column,
	Entity,
	Index,
	PrimaryColumn,
} from 'typeorm';

@Entity('free-time-entity')
export class FreeTimeEntity implements IFreeTime {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@PrimaryColumn()
	id: string;

	@ApiProperty({ type: String })
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
