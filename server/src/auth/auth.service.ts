import { Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UserService } from 'src/User/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validatorUser(userEamil: string, userPassword: string): Promise<any> {
    const user = await this.userService.getUserByEmail(userEamil);
    const isRightPassword = user && bcrypt.compare(userPassword, user.password);

    if (!user || !isRightPassword) return null;

    const { password, ...result } = user;
    return result;
  }
}
