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
import { IDefaultValue } from '@dorm/models';

@Entity('default-value')
export class DefaultValue implements IDefaultValue {
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	key: string;
	
    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    value: string;
}
