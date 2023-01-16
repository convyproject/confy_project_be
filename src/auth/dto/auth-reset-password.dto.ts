import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'passwordEmpty: Password harus diisi' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'hashEmpty: Kode unik harus diisi' })
  hash: string;
}
