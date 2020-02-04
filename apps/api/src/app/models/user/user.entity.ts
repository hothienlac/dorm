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
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user-entity')
export class UserEntity implements IUser {
    @ApiProperty({ type: String })
    @Index()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ type: String, enum: UserRolesEnum })
    @Index()
    @Column()
    role: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    username: string;

    @ApiProperty({ type: String })
    @Index()
    @Column()
    email: string;
    
    @ApiProperty({ type: String })
    @Index()
    @Column()
    phone: string;
    
    @ApiProperty({ type: String, enum: GenderEnum })
    @Index()
    @Column()
    gender: string;
    
    @ApiProperty({ type: String })
    @Index()
    @Column()
	avatar: string;
}
