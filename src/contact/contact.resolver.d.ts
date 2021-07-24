import { ContactService } from './contact.service';
import { ContactType } from './contact.type';
import { AddContactInput } from './contact.input';
export declare class ContactResolver {
    private contacService;
    constructor(contacService: ContactService);
    contact(contactId: string): Promise<import("./contact.entity").Contact>;
    getContacts(): Promise<import("./contact.entity").Contact[]>;
    addContact(addContactInput: AddContactInput): Promise<ContactType>;
    updateContact(addContactInput: AddContactInput, contactId: string): Promise<ContactType>;
    deleteContact(id: string): void;
}
