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
exports.PagesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_guard_1 = require("../../auth/guards/jwt-guard");
const create_page_dto_1 = require("./dto/create-page.dto");
const pages_service_1 = require("./pages.service");
const models_1 = require("./models");
const user_decorator_1 = require("../../decorators/user.decorator");
const gql_auth_guard_1 = require("../../guards/gql-auth-guard");
let PagesResolver = class PagesResolver {
    constructor(pageService) {
        this.pageService = pageService;
    }
    async createPage({ templateId, pageName }) {
        return this.pageService.createPage({
            pageName,
            templateId,
        });
    }
    async getPagesByTemplateId(templateId) {
        console.log(templateId);
        return this.pageService.getPagesByTemplateId({ templateId });
    }
    async getPage(pageId) {
        return await this.pageService.getPage(pageId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => models_1.Pages),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_page_dto_1.CreatePageDto]),
    __metadata("design:returntype", Promise)
], PagesResolver.prototype, "createPage", null);
__decorate([
    (0, graphql_1.Query)(() => [models_1.Pages]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('templateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesResolver.prototype, "getPagesByTemplateId", null);
__decorate([
    (0, graphql_1.Query)(() => models_1.Pages),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('pageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesResolver.prototype, "getPage", null);
PagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => models_1.Pages),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesResolver);
exports.PagesResolver = PagesResolver;
//# sourceMappingURL=pages.resolver.js.map