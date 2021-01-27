import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Hobby } from '../hobby/hobby.model';

@ObjectType()
@Schema()
export class Person {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [String])
  @Prop({ type: [Types.ObjectId], ref: Hobby.name })
  hobbies: Hobby[];
}

export type PersonDocument = Person & Document;
export const PersonSchema = SchemaFactory.createForClass(Person);
