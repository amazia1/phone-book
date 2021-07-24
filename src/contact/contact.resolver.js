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
exports.ContactResolver = void 0;
const contact_service_1 = require("./contact.service");
const contact_type_1 = require("./contact.type");
const graphql_1 = require("@nestjs/graphql");
const contact_input_1 = require("./contact.input");
let ContactResolver = class ContactResolver {
    constructor(contacService) {
        this.contacService = contacService;
    }
    contact(contactId) {
        return this.contacService.getById(contactId);
    }
    getContacts() {
        return this.contacService.getContacts();
    }
    addContact(addContactInput) {
        return this.contacService.addContact(addContactInput);
    }
    updateContact(addContactInput, contactId) {
        return this.contacService.updateContact(contactId, addContactInput);
    }
    deleteContact(id) {
        this.contacService.deleteContact(id);
    }
};
__decorate([
    graphql_1.Query(returns => contact_type_1.ContactType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "contact", null);
__decorate([
    graphql_1.Query(returns => [contact_type_1.ContactType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "getContacts", null);
__decorate([
    graphql_1.Mutation(returns => contact_type_1.ContactType),
    __param(0, graphql_1.Args('addContactInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_input_1.AddContactInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "addContact", null);
__decorate([
    graphql_1.Mutation(returns => contact_type_1.ContactType),
    __param(0, graphql_1.Args('addContactInput')),
    __param(1, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_input_1.AddContactInput, String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "updateContact", null);
__decorate([
    graphql_1.Mutation(returns => String, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "deleteContact", null);
ContactResolver = __decorate([
    graphql_1.Resolver(of => contact_type_1.ContactType),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactResolver);
exports.ContactResolver = ContactResolver;
//# sourceMappingURL=contact.resolver.js.map