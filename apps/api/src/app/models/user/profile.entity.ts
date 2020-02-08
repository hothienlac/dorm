import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum, IProfile } from '@dorm/models';
import { Exclude } from 'class-transformer';
import { Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ImageEntity } from './image.entity';

@Entity('profile')
export class ProfileEntity implements IProfile {
  @OneToOne(_ => ImageEntity, { cascade: ['insert', 'update'], eager: true, nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  avatar?: ImageEntity;

  @Column({ type: 'enum', enum: GenderEnum, default: GenderEnum.UNKNOW })
  gender?: GenderEnum = GenderEnum.UNKNOW;

  @Column({ nullable: true })
  @Length(10, 20)
  mobilePhone?: string;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
