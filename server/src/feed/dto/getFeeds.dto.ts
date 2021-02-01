import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { BaseResponse } from 'src/common/dto/baseResponse.dto';
import { Feed } from '../feed.schema';

@InputType('InputGetFeed')
export class getFeedRequest {
  @Field((type) => Int)
  page: number;
}

@ObjectType()
export class GetFeedsResponse extends BaseResponse {
  @Field((type) => [Feed], { nullable: true })
  feeds?: [Feed];

  @Field((types) => Int, { nullable: true })
  total?: number;
}
