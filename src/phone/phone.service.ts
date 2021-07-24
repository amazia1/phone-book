import { AddPhoneInput } from './phone.input';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhoneService {
    
    constructor(@InjectRepository(Phone) private phoneRepository: Repository<Phone>) {}

    getPhones() : Promise<Phone[]> {
        return this.phoneRepository.find();
    }

    getById(id: number) : Promise<Phone> {
        return this.phoneRepository.findOne(id);
    }

    addPhone(phoneInput: AddPhoneInput) : Promise<Phone> {
        console.log('addPhoneInput: ', phoneInput);
        const phone: Phone = this.phoneRepository.create(phoneInput);
        console.log('phone: ', phone);
        return this.phoneRepository.save(phone);
    }

    updatePhone(id: number, phoneInput: AddPhoneInput, ) : Promise<Phone> {

        return this.getById(id)
        .then((phone: Phone) => {
            phone.number = phoneInput.number;
            phone.description = phoneInput.description;
            phone.contact = phoneInput.contact;

            return this.phoneRepository.save(phone);
        })
    }

    deletePhone(id: number) {
        const result = this.phoneRepository.delete(id);
    }
    
}
