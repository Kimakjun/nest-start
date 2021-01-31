import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseResponse {
  @Field()
  result: string;

  @Field((types) => String, { nullable: true })
  error?: string;
}
