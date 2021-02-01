import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType('inputUser', { isAbstract: true })
@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field((type) => String)
  _id: string;

  @Field((type) => String, { nullable: true })
  @Prop({ default: 'User' })
  name?: string;

  @IsEmail()
  @Field((type) => String)
  @Prop({ required: true, unique: true })
  email: string;

  @MinLength(4)
  @MaxLength(20)
  @Field((type) => String)
  @Prop({ required: true })
  password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
