import { AddPhoneInput } from './phone.input';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';
export declare class PhoneService {
    private phoneRepository;
    constructor(phoneRepository: Repository<Phone>);
    getPhones(): Promise<Phone[]>;
    getById(id: number): Promise<Phone>;
    addPhone(phoneInput: AddPhoneInput): Promise<Phone>;
    updatePhone(id: number, phoneInput: AddPhoneInput): Promise<Phone>;
    deletePhone(id: number): void;
}
