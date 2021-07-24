
import { Field, InputType } from "@nestjs/graphql";
import { Phone } from "src/phone/phone.entity";

@InputType()
export class ContactPhonesInput {

    @Field()
    phones: Phone[];
}