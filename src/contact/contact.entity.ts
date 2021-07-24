import { Phone } from './../phone/phone.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    nickName: string;

    @Column()
    address: string;

    @OneToMany(type => Phone, (phone:Phone) => phone.contact, {
        eager: true,
        cascade: true
    })
    phones: Phone[];

    @Column()
    photo: string;
}