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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_dotenv_1 = require("nestjs-dotenv");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const types_1 = require("../types");
let AuthController = class AuthController {
    constructor(configService, authService) {
        this.configService = configService;
        this.authService = authService;
    }
    async githubAuth() { }
    async githubAuthCallback(request, res) {
        const { user } = request;
        if (!user) {
            throw new common_1.NotFoundException('No user found');
        }
        const { accessToken } = await this.authService.githubLogin(user);
        const params = new URLSearchParams({ accessToken });
        res.redirect(`http://localhost:3000?${params.toString()}`);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('github')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubAuth", null);
__decorate([
    (0, common_1.Get)('/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('github')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubAuthCallback", null);
AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [nestjs_dotenv_1.ConfigService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map