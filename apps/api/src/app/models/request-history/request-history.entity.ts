// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IRequestHistory } from "@dorm/models";
import { ApiProperty } from "@nestjs/swagger";
import {
	IsBoolean,
    IsDate,
	IsNotEmpty,
	IsString,
} from "class-validator";
import {
	Column,
	Entity,
	Index,
	PrimaryColumn,
} from "typeorm";

@Entity("request-history-entity")
export class RequestHistoryEntity implements IRequestHistory {
	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@PrimaryColumn()
    id: string;

	@ApiProperty({ type: String })
	@IsString()
    @IsNotEmpty()
	@Index()
	@Column()
	uid: string;

	@ApiProperty({ type: Date })
	@IsDate()
    @IsNotEmpty()
	@Index()
	@Column()
	time: Date;

	@ApiProperty({ type: Boolean })
	@IsBoolean()
    @IsNotEmpty()
    @Index()
    @Column()
    active: boolean;
}
