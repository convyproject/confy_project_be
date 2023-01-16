import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Validate,
  IsPhoneNumber,
  Matches,
} from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Transform } from 'class-transformer';

export class AuthRegisterLoginDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(({ value }) => value.toLowerCase().trim())
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists: Alamat e-mail telah digunakan',
  })
  @IsEmail(undefined, {
    message: 'emailNotValid: Masukkan alamat e-mail yang valid',
  })
  email: string;

  @ApiProperty()
  @MinLength(8, {
    message: 'passwordMinLength: Password harus mempunyai minimal 8 karakter',
  })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/, {
    message:
      'passwordFormatNotValid: Password harus mempunyai setidaknya 1 huruf kapital, 1 huruf kecil dan 1 nomer',
  })
  password: string;

  @ApiProperty({ example: '+62823' })
  @IsPhoneNumber(undefined, {
    message: 'phoneNumberNotValid: Masukkan nomer telepon yang valid',
  })
  phoneNumber: string;

  @ApiProperty({ example: 'John doe' })
  @IsNotEmpty({ message: 'emptyFullname: Nama lengkap harus diisi' })
  fullName: string;
}
