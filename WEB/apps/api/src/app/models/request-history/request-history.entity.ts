// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IRequestHistory } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
	ManyToOne,
} from 'typeorm';
import { RequestEntity, UserEntity } from '../';

@Entity('request-history')
export class RequestHistoryEntity implements IRequestHistory {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
    id: string;
	
	@ManyToOne(
		type => RequestEntity,
		x => x.history,
		{ onDelete: 'CASCADE', nullable: false },
	)
	request: RequestEntity;

	@ManyToOne(
		type => UserEntity,
		{ onDelete: 'CASCADE', nullable: false },
	)
	user: UserEntity;

	@ApiProperty({ type: String })
	@Index()
	@Column()
	uid: string;

	@ApiProperty({ type: Date })
	@Index()
	@Column()
	time: Date;
	
	@ApiProperty({ type: Boolean })
    @Index()
    @Column()
	active: boolean;
}
