import { ApiProperty } from '@nestjs/swagger';
import { IImage, ImageTypeEnum } from '@dorm/models';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, Length, MaxLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('image')
export class ImageEntity implements IImage {
  @Length(1, 100)
  @Column({ length: 100 })
  title: string;

  @Column({ type: 'enum', enum: ImageTypeEnum, default: ImageTypeEnum.Profile })
  @IsEnum(ImageTypeEnum)
  type: ImageTypeEnum;

  @ManyToOne(
    type => UserEntity,
    user => user.images,
    { onDelete: 'CASCADE', nullable: false },
  )
  user: UserEntity;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @IsOptional()
  @Transform(value => value.toString('base64'), { toPlainOnly: true })
  @Column({ type: 'bytea', nullable: true })
  data?: Buffer;

  @IsOptional()
  @Column({ nullable: true })
  checksum?: string;

  @IsOptional()
  @Column({ nullable: true })
  mimeType?: string;

  @IsOptional()
  @Column({ nullable: true })
  size?: number;

  @IsOptional()
  @MaxLength(500)
  @Column({ length: 500, nullable: true })
  url?: string;
}
