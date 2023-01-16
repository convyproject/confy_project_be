import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthEmailLoginDto {
  @ApiProperty({ example: 'test1@example.com' })
  @IsNotEmpty({
    message: 'emailEmpty: Alamat e-mail harus diisi',
  })
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'passwordEmpty: Password harus diisi',
  })
  password: string;
}
