import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@InputType('inputFeed', { isAbstract: true })
@ObjectType()
@Schema({ timestamps: true })
export class Feed {
  @Field((type) => String)
  _id: string;

  @Field((type) => String)
  @Prop({ required: true })
  content: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}

export type FeedDocument = Feed & Document;

export const FeedSchema = SchemaFactory.createForClass(Feed);
