import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddPhoneInput {

    @Field()
    number: string;

    @Field()
    description: string;

    @Field()
    contact: string;
}