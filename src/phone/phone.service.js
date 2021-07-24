"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
const typeorm_1 = require("typeorm");
const phone_entity_1 = require("./phone.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let PhoneService = class PhoneService {
    constructor(phoneRepository) {
        this.phoneRepository = phoneRepository;
    }
    getPhones() {
        return this.phoneRepository.find();
    }
    getById(id) {
        return this.phoneRepository.findOne(id);
    }
    addPhone(phoneInput) {
        console.log('addPhoneInput: ', phoneInput);
        const phone = this.phoneRepository.create(phoneInput);
        console.log('phone: ', phone);
        return this.phoneRepository.save(phone);
    }
    updatePhone(id, phoneInput) {
        return this.getById(id)
            .then((phone) => {
            phone.number = phoneInput.number;
            phone.description = phoneInput.description;
            phone.contact = phoneInput.contact;
            return this.phoneRepository.save(phone);
        });
    }
    deletePhone(id) {
        const result = this.phoneRepository.delete(id);
    }
};
PhoneService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(phone_entity_1.Phone)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PhoneService);
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map