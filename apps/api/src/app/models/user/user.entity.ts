// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import {
    IUser,
    UserRolesEnum,
    GenderEnum,
} from '@dorm/models'
import { ApiProperty } from '@nestjs/swagger';
import {
    IsEnum,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import {
    Column,
    Entity,
    Index,
    PrimaryColumn,
} from 'typeorm';

@Entity('user-entity')
export class UserEntity implements IUser {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @PrimaryColumn()
    id: string;

    @ApiProperty({ type: String, enum: UserRolesEnum })
    @IsEnum(
        UserRolesEnum,
        {
            message: `Role must be one of
                ${UserRolesEnum}`,
        },
    )
    @IsNotEmpty()
    @Index()
    @Column()
    role: string;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    username: string;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    email: string;
    
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @Column()
    phone: string;
    
    @ApiProperty({ type: String, enum: GenderEnum })
    @IsEnum(
        GenderEnum,
        {
            message: `Gender must be one of
                ${GenderEnum}`,
        },
    )
    @IsNotEmpty()
    @Index()
    @Column()
    gender: string;
    
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @Index()
    @Column()
	avatar: string;
}
