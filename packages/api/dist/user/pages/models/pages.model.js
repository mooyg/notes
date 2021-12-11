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
exports.Pages = void 0;
const graphql_1 = require("@nestjs/graphql");
const content_model_1 = require("./content.model");
let Pages = class Pages {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Pages.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Pages.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Pages.prototype, "badge", void 0);
__decorate([
    (0, graphql_1.Field)(() => [content_model_1.Content], { nullable: true }),
    __metadata("design:type", content_model_1.Content)
], Pages.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Pages.prototype, "templateId", void 0);
Pages = __decorate([
    (0, graphql_1.ObjectType)()
], Pages);
exports.Pages = Pages;
//# sourceMappingURL=pages.model.js.map