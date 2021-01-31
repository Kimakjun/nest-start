import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  RegisterUserRequest,
  RegisterUserResponse,
} from './dto/registerUser.dto';

import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

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
