
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ContactIDInput {
    
    @Field()
    contactId: string;
}