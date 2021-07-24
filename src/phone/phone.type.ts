import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Phone')
export class PhoneType {

    @Field(type => ID)
    id: number;

    @Field()
    number: string;

    @Field()
    description: string;

    @Field()
    contact: string
}