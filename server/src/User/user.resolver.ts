import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
  RegisterUserRequest,
  RegisterUserResponse,
} from './dto/registerUser.dto';
import { LoginUserRequest, LoginUserResponse } from './dto/loginUser.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => LoginUserResponse)
  async login(
    @Args('input') input: LoginUserRequest,
  ): Promise<LoginUserResponse> {
    return { result: 'string', token: 'token' };
  }

  @Mutation(() => RegisterUserResponse)
  async register(
    @Args('input') input: RegisterUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.userService.register(input);
  }
}
