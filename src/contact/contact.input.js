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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContactInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const phone_entity_1 = require("../phone/phone.entity");
let AddContactInput = class AddContactInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AddContactInput.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AddContactInput.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AddContactInput.prototype, "nickName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AddContactInput.prototype, "address", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AddContactInput.prototype, "photo", void 0);
AddContactInput = __decorate([
    graphql_1.InputType()
], AddContactInput);
exports.AddContactInput = AddContactInput;
//# sourceMappingURL=contact.input.js.map