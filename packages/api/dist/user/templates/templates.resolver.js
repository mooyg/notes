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
exports.TemplatesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_guard_1 = require("../../auth/guards/jwt-guard");
const user_decorator_1 = require("../../decorators/user.decorator");
const gql_auth_guard_1 = require("../../guards/gql-auth-guard");
const create_template_dto_1 = require("./dto/create-template.dto");
const models_1 = require("./models");
const templates_service_1 = require("./templates.service");
let TemplatesResolver = class TemplatesResolver {
    constructor(templatesService) {
        this.templatesService = templatesService;
    }
    async createTemplate({ templateName }, userId) {
        return this.templatesService.createTemplate({ userId, templateName });
    }
    async getTemplates(userId) {
        return this.templatesService.getTemplates(userId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => models_1.Templates),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, user_decorator_1.GQLUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto, Object]),
    __metadata("design:returntype", Promise)
], TemplatesResolver.prototype, "createTemplate", null);
__decorate([
    (0, graphql_1.Query)(() => [models_1.Templates]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, user_decorator_1.GQLUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TemplatesResolver.prototype, "getTemplates", null);
TemplatesResolver = __decorate([
    (0, graphql_1.Resolver)(() => models_1.Templates),
    __metadata("design:paramtypes", [templates_service_1.TemplatesService])
], TemplatesResolver);
exports.TemplatesResolver = TemplatesResolver;
//# sourceMappingURL=templates.resolver.js.map