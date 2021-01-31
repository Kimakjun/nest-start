import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { BaseResponse } from 'src/common/dto/baseResponse.dto';
import { User } from '../user.schema';

// 입력값 검증하는곳
@InputType('InputCreateUser')
export class RegisterUserRequest extends PickType(User, [
  'email',
  'password',
  'name',
]) {}

@ObjectType()
export class RegisterUserResponse extends BaseResponse {}
