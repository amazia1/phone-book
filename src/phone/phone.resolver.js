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
exports.PhoneResolver = void 0;
const phone_service_1 = require("./phone.service");
const graphql_1 = require("@nestjs/graphql");
const phone_type_1 = require("./phone.type");
const phone_input_1 = require("./phone.input");
let PhoneResolver = class PhoneResolver {
    constructor(phoneService) {
        this.phoneService = phoneService;
    }
    phone(id) {
        return this.phoneService.getById(id);
    }
    getPhones() {
        return this.phoneService.getPhones();
    }
    addPhone(addPhoneInput) {
        return this.phoneService.addPhone(addPhoneInput);
    }
    updatePhone(id, addPhoneInput) {
        return this.phoneService.updatePhone(id, addPhoneInput);
    }
    deletePhone(id) {
        this.phoneService.deletePhone(id);
    }
};
__decorate([
    graphql_1.Query(returns => phone_type_1.PhoneType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PhoneResolver.prototype, "phone", null);
__decorate([
    graphql_1.Query(returns => [phone_type_1.PhoneType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhoneResolver.prototype, "getPhones", null);
__decorate([
    graphql_1.Mutation(returns => phone_type_1.PhoneType),
    __param(0, graphql_1.Args('addPhoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_input_1.AddPhoneInput]),
    __metadata("design:returntype", Promise)
], PhoneResolver.prototype, "addPhone", null);
__decorate([
    graphql_1.Mutation(returns => phone_type_1.PhoneType),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('addPhoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, phone_input_1.AddPhoneInput]),
    __metadata("design:returntype", Promise)
], PhoneResolver.prototype, "updatePhone", null);
__decorate([
    graphql_1.Mutation(returns => Number, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PhoneResolver.prototype, "deletePhone", null);
PhoneResolver = __decorate([
    graphql_1.Resolver(of => phone_type_1.PhoneType),
    __metadata("design:paramtypes", [phone_service_1.PhoneService])
], PhoneResolver);
exports.PhoneResolver = PhoneResolver;
//# sourceMappingURL=phone.resolver.js.map