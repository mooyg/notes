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
const user_decorator_1 = require("../decorators/user.decorator");
const auth_guard_1 = require("../guard/auth.guard");
const reqbody_guard_1 = require("../guard/reqbody.guard");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService, prisma) {
        this.userService = userService;
        this.prisma = prisma;
    }
    async getUser(userId, req) {
        console.log(userId);
        return await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    }
    async getCookie(req) {
        return req.headers;
    }
    async createTemplate(req, userId) {
        console.log(req.body);
        return this.userService.createTemplate(userId, req.body);
    }
    async getTemplates(userId) {
        return this.userService.getTemplates(userId);
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
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/cookie'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCookie", null);
__decorate([
    (0, common_1.Post)('/template/create'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, reqbody_guard_1.ReqBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.Get)('/templates'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.Post)('/pages/create/:templateId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, reqbody_guard_1.ReqBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('templateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createPage", null);
__decorate([
    (0, common_1.Get)('/pages/:templateId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
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