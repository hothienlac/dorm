// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IUser, RolesEnum } from "@dorm/models";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsEnum,
    IsNotEmpty,
    IsString,
} from "class-validator";
import {
    Column,
    Entity,
    Index,
    PrimaryColumn,
} from "typeorm";

@Entity("user-entity")
export class UserEntity implements IUser {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @PrimaryColumn()
    id: string;

    @ApiProperty({ type: String, enum: RolesEnum })
    @IsEnum(
        RolesEnum,
        {
            message: `Role must be
                ${RolesEnum}`,
        },
    )
    @IsNotEmpty()
    @Index()
    @Column()
    role: string;
}
