// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import {
	Column,
	Entity,
	Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
} from 'class-validator';
import { IFingerPrint } from '@dorm/models';

@Entity('finger-print')
export class FingerPrint implements IFingerPrint {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	fid: string;
	
    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    uid: string;
}
