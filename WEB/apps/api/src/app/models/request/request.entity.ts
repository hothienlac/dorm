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
	ManyToOne,
	OneToMany,
} from 'typeorm';
import {
	UserEntity,
	RequestHistoryEntity,
} from '../';

@Entity('request')
export class RequestEntity implements IRequest {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
    id: string;

	@ManyToOne(
		type => UserEntity,
		user => user.in_out_history,
		{ onDelete: 'CASCADE', nullable: false },
	)
	user: UserEntity;

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

	@OneToMany(
		_ => RequestHistoryEntity,
		x => x.request
	)
	history?: RequestHistoryEntity[];
	
}
