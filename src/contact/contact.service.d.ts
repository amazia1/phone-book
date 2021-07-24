import { Repository } from "typeorm";
import { Contact } from "./contact.entity";
import { AddContactInput } from "./contact.input";
export declare class ContactService {
    private contactRepository;
    constructor(contactRepository: Repository<Contact>);
    addContact(addContactInput: AddContactInput): Promise<Contact>;
    updateContact(id: string, addContactInput: AddContactInput): Promise<Contact>;
    getById(id: string): Promise<Contact>;
    getContacts(): Promise<Contact[]>;
    deleteContact(id: string): void;
}
