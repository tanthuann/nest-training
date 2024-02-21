// libs
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'Give the username',
    required: true,
    default: 'join'
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Give the password',
    required: true,
    default: 'join123'
  })
  @IsNotEmpty()
  password: string;
}
