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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService, prisma) {
        this.userService = userService;
        this.prisma = prisma;
    }
    async getUser(req) {
        console.log(req.user);
        console.log(await this.prisma.user.findMany({}));
        return req.user;
    }
    async createTemplate(req) {
        console.log(req.body);
        console.log(req.user);
        return this.userService.createTemplate(req.user, req.body);
    }
    async getTemplates(req) {
        return this.userService.getTemplates(req.user);
    }
    async createPage(req, templateId) {
        return this.userService.createPage({
            details: req.body,
            templateId,
        });
    }
    async getPagesByTemplateId(templateId) {
        return this.userService.getPagesByTemplateId({ templateId });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('/template/create'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.Get)('/templates'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.Post)('/pages/create/:templateId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('templateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createPage", null);
__decorate([
    (0, common_1.Get)('/pages/:templateId'),
    __param(0, (0, common_1.Param)('templateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPagesByTemplateId", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService, prisma_service_1.PrismaService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map