import { Injectable } from '@nestjs/common';

export interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'join',
      password: 'join123'
    }
  ];

  async fineOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
