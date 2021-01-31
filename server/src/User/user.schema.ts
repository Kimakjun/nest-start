import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@InputType('inputUser', { isAbstract: true })
@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field((type) => String)
  _id: string;

  @Field((type) => String)
  @Prop({ default: 'User' })
  name: string;

  @Field((type) => String)
  @Prop({ required: true, unique: true })
  email: string;

  @Field((type) => String)
  @Prop({ required: true })
  password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);