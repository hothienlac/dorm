// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IDefaultValue } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('default-value-entity')
export class DefaultValueEntity implements IDefaultValue {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
	key: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    value: string;
}
