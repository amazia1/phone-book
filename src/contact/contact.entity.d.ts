import { Phone } from './../phone/phone.entity';
export declare class Contact {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    address: string;
    phones: Phone[];
    photo: string;
}
