import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "./contact.entity";
import { AddContactInput } from "./contact.input";

@Injectable()
export class ContactService {
    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>){}

    addContact(addContactInput: AddContactInput) : Promise<Contact> {

        const contact: Contact = this.contactRepository.create(addContactInput)
        return this.contactRepository.save(contact);
    }

    updateContact(id: string, addContactInput: AddContactInput) : Promise<Contact> {
        
        return this.getById(id)
            .then((contact: Contact) => {
                contact.firstName = addContactInput.firstName;
                contact.lastName = addContactInput.lastName;
                contact.nickName = addContactInput.nickName;
                contact.address = addContactInput.address;
                contact.photo = addContactInput.photo;
                
                return this.contactRepository.save(contact);
            });
    }

    getById(id:string) : Promise<Contact> {
        return this.contactRepository.findOne(id);
    }

    getContacts() : Promise<Contact[]> {
        return this.contactRepository.find({
            order: {
                firstName: 'DESC',
                nickName: 'DESC'
            }
        });
    }

    deleteContact(id: string) {
        const result = this.contactRepository.delete(id);
    }
}