import { ApiProperty } from '@nestjs/swagger';
import { IUser, UserRolesEnum, IFreeTime } from '@dorm/models';
import { IsAscii, IsEmail, IsNotEmpty, Length, IsEnum } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  RelationId,
  UpdateDateColumn,
  VersionColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  ImageEntity,
  ProfileEntity,
  FreeTimeEntity,
  InOutHistoryEntity,
} from '../';

@Entity('user')
export class UserEntity implements IUser {

  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @Column({ type: 'enum', enum: UserRolesEnum, default: UserRolesEnum.STUDENT })
  @IsEnum(UserRolesEnum)
  role: UserRolesEnum;

  @IsEmail()
  @IsNotEmpty()
  @Length(10, 100)
  @Index()
  @Column()
  email: string;

  @IsAscii()
  @IsNotEmpty()
  @Length(8, 20)
  @Index({ unique: true })
  @Column()
  username: string;

  @VersionColumn()
  version?: number;

  @OneToMany(
    _ => ImageEntity,
    image => image.user
  )
  images?: ImageEntity[];

  @OneToMany(
    _ => InOutHistoryEntity,
    x => x.user
  )
  in_out_history?: InOutHistoryEntity[];

  @OneToMany(
    _ => UserEntity,
    x => x.children
  )
  parents?: UserEntity[];

  @OneToMany(
    _ => UserEntity,
    x => x.parents
  )
  children?: UserEntity[];

  // FIXME: OneToOne downward cascade delete not implemented
  @OneToOne(type => ProfileEntity, { cascade: ['insert', 'remove'], nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  profile?: ProfileEntity;

  @OneToOne(type => FreeTimeEntity, { cascade: ['insert', 'remove'], nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  free_time?: IFreeTime;

  @RelationId((user: UserEntity) => user.profile)
  readonly profileId?: string;
}
