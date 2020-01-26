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
import { IRelationship } from '@dorm/models';

@Entity('relationship')
export class Relationship implements IRelationship {
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
    id: string;
    
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	sid: string;
    
	@ApiPropertyOptional({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	pid: string;
}
