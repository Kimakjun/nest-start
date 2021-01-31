import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { BaseResponse } from 'src/common/dto/baseResponse.dto';
import { User } from 'src/User/user.schema';

// 입력값 검증하는곳
@InputType('InputLoginUser')
export class LoginUserRequest extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginUserResponse extends BaseResponse {
  @Field((types) => String)
  token: string;
}
