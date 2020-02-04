// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IRequest } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('request-entity')
export class RequestEntity implements IRequest {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
    id: string;

	@ApiProperty({ type: String })
	@Index()
	@Column()
	sid: string;

	@ApiProperty({ type: Date })
	@Index()
	@Column()
	in: Date;

    @ApiProperty({ type: Date })
    @Index()
    @Column()
	out: Date;

	@ApiProperty({ type: Boolean })
    @Index()
    @Column()
    parent_active: boolean;

	@ApiProperty({ type: Boolean })
    @Index()
    @Column()
    admin_active: boolean;
}
