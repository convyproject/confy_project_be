import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthConfirmEmailDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'emptyHash: Masukkan kode unik' })
  hash: string;
}
