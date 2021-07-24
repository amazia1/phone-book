import { Contact } from "src/contact/contact.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phone {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    description: string;

    @ManyToOne(type => Contact, (contact:Contact) => contact.phones, { eager: false})
    contact: string;
}