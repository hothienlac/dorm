// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IFingerPrint } from '@dorm/models';
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	Entity,
	Index,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('finger-print-entity')
export class FingerPrintEntity implements IFingerPrint {
	@ApiProperty({ type: String })
	@Index()
	@PrimaryGeneratedColumn('uuid')
	fid: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    uid: string;
}
