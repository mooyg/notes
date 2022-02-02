"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojiModule = void 0;
const common_1 = require("@nestjs/common");
const emoji_controller_1 = require("./emoji.controller");
const emoji_service_1 = require("./emoji.service");
let EmojiModule = class EmojiModule {
};
EmojiModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [emoji_controller_1.EmojiController],
        providers: [emoji_service_1.EmojiService],
    })
], EmojiModule);
exports.EmojiModule = EmojiModule;
//# sourceMappingURL=emoji.module.js.map