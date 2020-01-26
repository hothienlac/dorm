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
    IsDate,
} from 'class-validator';
import { IInOutHistory } from '@dorm/models';

@Entity('in-out-history')
export class InOutHistory implements IInOutHistory {
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

	@ApiPropertyOptional({ type: Date })
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
