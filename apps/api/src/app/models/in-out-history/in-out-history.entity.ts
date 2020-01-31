// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IInOutHistory } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsDate,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import {
	Column,
	Entity,
	Index,
	PrimaryColumn,
} from 'typeorm';

@Entity('in-out-history-entity')
export class InOutHistoryEntity implements IInOutHistory {
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
}
