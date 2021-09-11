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
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const passport_1 = require("@nestjs/passport");
const session = require("express-session");
const nestjs_session_1 = require("nestjs-session");
const connectRedis = require("connect-redis");
const redis_1 = require("./redis/redis");
const RedisStore = connectRedis(session);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            emoji_module_1.EmojiModule,
            nestjs_dotenv_1.ConfigModule.forRoot(),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'github',
                session: true,
            }),
            nestjs_session_1.SessionModule.forRoot({
                session: {
                    store: new RedisStore({
                        client: redis_1.redis,
                    }),
                    name: 'qid',
                    secret: 'shsaudasiua',
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
                    },
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map