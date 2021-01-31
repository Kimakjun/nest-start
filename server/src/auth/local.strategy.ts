import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocaStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(userEmail: string, userPassword: string): Promise<any> {
    const user = await this.authService.validatorUser(userEmail, userPassword);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
