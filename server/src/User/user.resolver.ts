import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { jwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/decorator/user.decorator';
import {
  RegisterUserRequest,
  RegisterUserResponse,
} from './dto/registerUser.dto';

import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(jwtAuthGuard)
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => RegisterUserResponse)
  async register(
    @Args('input') input: RegisterUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.userService.register(input);
  }
}
