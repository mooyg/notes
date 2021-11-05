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
exports.PagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let PagesService = class PagesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPage({ pageName, templateId }) {
        return await this.prisma.pages.create({
            data: {
                name: pageName,
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
        return pages;
    }
    async getPage(pageId) {
        const page = await this.prisma.pages.findFirst({
            where: {
                id: pageId,
            },
        });
        return page;
    }
    async saveContent(pageId, content) {
        return await this.prisma.pages.update({
            where: {
                id: pageId,
            },
            data: {
                content: content,
            },
        });
    }
};
PagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map