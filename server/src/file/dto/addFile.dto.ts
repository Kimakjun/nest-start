import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseResponse } from 'src/common/dto/baseResponse.dto';
import { Upload } from 'src/scalar/scalar';

@InputType()
export class AddFileRequest {
  @Field()
  file: Upload;
}

@ObjectType()
export class AddFileResponse extends BaseResponse {
  @Field()
  url: String;
}
