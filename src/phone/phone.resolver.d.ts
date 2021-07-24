import { PhoneService } from './phone.service';
import { PhoneType } from "./phone.type";
import { AddPhoneInput } from './phone.input';
export declare class PhoneResolver {
    private phoneService;
    constructor(phoneService: PhoneService);
    phone(id: number): Promise<PhoneType>;
    getPhones(): Promise<import("./phone.entity").Phone[]>;
    addPhone(addPhoneInput: AddPhoneInput): Promise<PhoneType>;
    updatePhone(id: number, addPhoneInput: AddPhoneInput): Promise<PhoneType>;
    deletePhone(id: number): void;
}
