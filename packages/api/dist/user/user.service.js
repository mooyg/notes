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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUser(id) {
        return await this.prisma.user.findFirst({
            where: {
                id: id.id,
            },
        });
    }
    async createTemplate(userId, details) {
        return await this.prisma.templates.create({
            data: {
                name: details.templateName,
                userId: userId.id,
            },
        });
    }
    async getTemplates(userId) {
        const templates = await this.prisma.templates.findMany({
            where: {
                userId: userId.id,
            },
        });
        if (!templates)
            return [];
        return templates;
    }
    async createPage({ details, templateId }) {
        if (!templateId)
            return 'No template Id provided';
        return await this.prisma.pages.create({
            data: {
                name: details.pageName,
                templateId,
            },
        });
    }
    async getPagesByTemplateId({ templateId }) {
        const pages = await this.prisma.pages.findMany({
            where: {
                templateId,
            },
        });
        if (!pages)
            return 'No pages found for this template';
        return pages;
    }
    async getPage(userId, pageId) {
        const page = await this.prisma.pages.findFirst({
            where: {
                id: pageId,
            },
        });
        return page;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map