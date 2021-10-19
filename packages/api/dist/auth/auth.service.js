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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const types_1 = require("../types");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async getUser(id) {
        return await this.prismaService.user.findFirst({
            where: {
                id: id.id,
            },
        });
    }
    async githubLogin(user) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                username: user.username,
            },
        });
        if (userExists) {
            return this.createJwt(userExists);
        }
        else {
            console.log(user);
            const createdUser = await this.prismaService.user.create({
                data: { userProfilePicture: user._json.avatar_url, username: user.username },
            });
            return this.createJwt(createdUser);
        }
    }
    createJwt({ id }) {
        return {
            accessToken: this.jwtService.sign({ id }),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map