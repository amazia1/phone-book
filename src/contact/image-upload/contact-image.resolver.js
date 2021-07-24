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
exports.ContactImageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = require("fs");
let ContactImageResolver = class ContactImageResolver {
    constructor() { }
    addContactPicture({ createReadStream, filename }) {
        console.log(filename);
        return new Promise(async (resolve, reject) => createReadStream()
            .pipe(fs_1.createWriteStream(__dirname + `/images/${filename}`))
            .on('finish', () => resolve(true))
            .on('error', (error) => {
            console.log(error);
            reject(false);
        }));
    }
};
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'image', type: () => apollo_server_express_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactImageResolver.prototype, "addContactPicture", null);
ContactImageResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [])
], ContactImageResolver);
exports.ContactImageResolver = ContactImageResolver;
//# sourceMappingURL=contact-image.resolver.js.map