"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const emoji_module_1 = require("./emoji/emoji.module");
const nestjs_dotenv_1 = require("nestjs-dotenv");
const auth_module_1 = require("./auth/auth.module");
const passport_1 = require("@nestjs/passport");
const graphql_1 = require("@nestjs/graphql");
const posix_1 = require("path/posix");
const pages_resolver_1 = require("./user/pages/pages.resolver");
const pages_service_1 = require("./user/pages/pages.service");
const pages_module_1 = require("./user/pages/pages.module");
const prisma_service_1 = require("./prisma.service");
const templates_module_1 = require("./user/templates/templates.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            emoji_module_1.EmojiModule,
            nestjs_dotenv_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'github',
                session: false,
            }),
            graphql_1.GraphQLModule.forRoot({ autoSchemaFile: (0, posix_1.join)(process.cwd(), 'src/schema.gql') }),
            pages_module_1.PagesModule,
            templates_module_1.TemplatesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, pages_resolver_1.PagesResolver, pages_service_1.PagesService, prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map