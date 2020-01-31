// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IFingerPrint } from "@dorm/models";
import { ApiProperty } from "@nestjs/swagger";
import {
	IsNotEmpty,
	IsString,
} from "class-validator";
import {
	Column,
	Entity,
	Index,
	PrimaryColumn,
} from "typeorm";

@Entity("finger-print-entity")
export class FingerPrintEntity implements IFingerPrint {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@PrimaryColumn()
	fid: string;

    @ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    uid: string;
}
