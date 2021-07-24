import { Field, InputType, ID } from "@nestjs/graphql";
import { Phone } from "src/phone/phone.entity";

@InputType()
export class AddContactInput {

    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    nickName: string;

    @Field()
    address: string;

    @Field()
    photo: string;

    phones: Phone[];
}