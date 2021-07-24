import { Field, ID, ObjectType } from "@nestjs/graphql";
import { PhoneType } from "src/phone/phone.type";

@ObjectType('Contact')
export class ContactType {
    
    @Field(type => ID)
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    nickName: string;

    @Field()
    address: string;

    @Field(type => [PhoneType])
    phones: PhoneType[];

    @Field()
    photo: string;
}