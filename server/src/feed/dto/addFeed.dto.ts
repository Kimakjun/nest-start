import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { BaseResponse } from 'src/common/dto/baseResponse.dto';
import { Feed } from '../feed.schema';

@InputType('InputAddFeed')
export class AddInputRequest extends PickType(Feed, ['content']) {}

@ObjectType()
export class AddFeedsResponse extends BaseResponse {
  @Field((type) => Feed, { nullable: true })
  feed?: Feed;
}
