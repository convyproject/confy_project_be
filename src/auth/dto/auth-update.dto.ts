import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength, Validate } from 'class-validator';
import { IsExist } from '../../utils/validators/is-exists.validator';
import { FileEntity } from '../../files/entities/file.entity';

export class AuthUpdateDto {
  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists: Foto tidak ditemukan',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'John Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'fullNameEmpty: Nama lengkap wajib diisi' })
  fullName?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'passwordEmpty: Password bary wajib diisi' })
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'oldPasswordEmpty: Password lama wajib diisi' })
  oldPassword: string;
}
