// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IDefaultValue } from '@dorm/models';
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

@Entity('default-value-entity')
export class DefaultValueEntity implements IDefaultValue {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@PrimaryColumn()
	key: string;

    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    value: string;
}
