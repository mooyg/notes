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
const axios_1 = require("axios");
const nestjs_dotenv_1 = require("nestjs-dotenv");
const prisma_service_1 = require("../prisma.service");
let AuthService = class AuthService {
    constructor(configService, prismaService) {
        this.configService = configService;
        this.prismaService = prismaService;
    }
    async getAccessToken(code, res, session) {
        try {
            const { data } = await (0, axios_1.default)({
                method: 'POST',
                url: `https://github.com/login/oauth/access_token?client_id=${this.configService.get('GITHUB_CLIENT_ID')}&client_secret=${this.configService.get('GITHUB_CLIENT_SECRET')}&code=${code}`,
                headers: {
                    accept: 'application/json',
                },
            });
            console.log(data.access_token);
            const { data: userData } = await axios_1.default.get('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${data.access_token}`,
                },
            });
            const user = await this.prismaService.user.findFirst({
                where: {
                    username: userData.login,
                },
            });
            if (!user) {
                const newUser = await this.prismaService.user.create({
                    data: {
                        accessToken: data.access_token,
                        userProfilePicture: userData.avatar_url,
                        username: userData.login,
                    },
                });
                session.user = newUser.id;
                res.redirect('/');
            }
            else {
                console.log(`User with name ${user.username} already exists`);
                res.redirect('http://localhost:8080/api/auth/exists');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_dotenv_1.ConfigService,
        prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map