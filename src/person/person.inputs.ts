import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => [String])
  hobbies: Types.ObjectId[];
}

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: Hobby[];
}

@InputType()
export class UpdatePersonInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: Hobby[];
}
