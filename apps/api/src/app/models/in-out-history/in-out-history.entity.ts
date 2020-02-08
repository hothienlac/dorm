// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IInOutHistory } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('in-out-history-entity')
export class InOutHistoryEntity implements IInOutHistory {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
    id: string;

	@ManyToOne(
		type => UserEntity,
		user => user.images,
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
}
