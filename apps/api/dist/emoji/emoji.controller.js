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
exports.EmojiController = void 0;
const common_1 = require("@nestjs/common");
const emoji_service_1 = require("./emoji.service");
const path = require("path");
let EmojiController = class EmojiController {
    constructor(userService) {
        this.userService = userService;
    }
    getUser(res, emojiId) {
        return res.sendFile(path.join(__dirname, '../../node_modules', `emoji-datasource-apple/img/apple/64/${emojiId}`));
    }
};
__decorate([
    (0, common_1.Get)('/:emojiId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('emojiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EmojiController.prototype, "getUser", null);
EmojiController = __decorate([
    (0, common_1.Controller)('emoji'),
    __metadata("design:paramtypes", [emoji_service_1.EmojiService])
], EmojiController);
exports.EmojiController = EmojiController;
//# sourceMappingURL=emoji.controller.js.map