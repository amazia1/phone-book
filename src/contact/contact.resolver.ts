import { ContactService } from './contact.service';
import { ContactType } from './contact.type';
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddContactInput } from './contact.input';

@Resolver(of => ContactType)
export class ContactResolver {

    constructor(private contacService: ContactService) {}

    @Query(returns => ContactType)
    contact(@Args('id') contactId: string) {
        return this.contacService.getById(contactId);
    }

    @Query(returns => [ContactType])
    getContacts() {
        return this.contacService.getContacts();
    }

    @Mutation(returns => ContactType)
    addContact(
        @Args('addContactInput') addContactInput: AddContactInput, ): Promise<ContactType> {
        return this.contacService.addContact(addContactInput);
    }

    @Mutation(returns => ContactType)
    updateContact(
        @Args('addContactInput') addContactInput: AddContactInput, 
        @Args('id') contactId: string,) : Promise<ContactType> {

        return this.contacService.updateContact(contactId, addContactInput);
    }

    @Mutation(returns => String!, {nullable: true})
    deleteContact(@Args('id') id: string) {
        this.contacService.deleteContact(id);
    }
}