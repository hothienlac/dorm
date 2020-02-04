// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IFreeTime } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('free-time-entity')
export class FreeTimeEntity implements IFreeTime {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ApiProperty({ type: String })
	@Index()
	@Column()
	sid: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    begin: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    end: string;
}
