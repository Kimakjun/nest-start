import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { ResGql } from 'src/decorator/res.decorator';
import { CurrentUser } from 'src/decorator/user.decorator';
import { User } from 'src/User/user.schema';

import { AuthService } from './auth.service';
import { LoginUserRequest, LoginUserResponse } from './dto/loginUser.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginUserResponse)
  async login(
    @Args('input') input: LoginUserRequest,
    @CurrentUser() user: User,
    @ResGql() res: Response,
  ): Promise<LoginUserResponse> {
    const accessToken = await this.authService.login(user);

    res.cookie('HEADER', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 24,
    });

    return { result: 'string', token: accessToken };
  }
}
