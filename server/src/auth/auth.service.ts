import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { User } from 'src/User/user.schema';
import { UserService } from 'src/User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validatorUser(userEamil: string, userPassword: string): Promise<any> {
    const user = await this.userService.getUserByEmail(userEamil);
    const isRightPassword = user && bcrypt.compare(userPassword, user.password);

    if (!user || !isRightPassword) return null;

    return { id: user._id, name: user.name };
  }

  async login(user: any) {
    const payload = { userId: user.id };

    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
