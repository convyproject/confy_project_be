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
    message: 'emailAlreadyExists',
  })
  @IsEmail(undefined, {
    message: 'Email must be valid email',
  })
  email: string;

  @ApiProperty()
  @MinLength(8, {
    message: '//Password must be atleast 8 characters',
  })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/, {
    message: 'Password must be atleast 1 uppercase 1 lowercase 1 number',
  })
  password: string;

  @ApiProperty({ example: '+62823' })
  @IsPhoneNumber(undefined, {
    message: 'Phone number must be valid phone number',
  })
  phoneNumber: string;

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;
}
