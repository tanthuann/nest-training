// libs
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'Give the username',
    required: true,
    default: 'join'
  })
  username: string;

  @ApiProperty({
    description: 'Give the password',
    required: true
  })
  password: string;
}
