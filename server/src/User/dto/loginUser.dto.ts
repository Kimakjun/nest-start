import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../user.schema';
import { BaseResponse } from './baseResponse.dto';

// 입력값 검증하는곳
@InputType('InputLoginUser')
export class LoginUserRequest extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginUserResponse extends BaseResponse {
  @Field((types) => String)
  token: string;
}
