import { Phone } from "src/phone/phone.entity";
export declare class AddContactInput {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    address: string;
    photo: string;
    phones: Phone[];
}
