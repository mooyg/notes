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
exports.PagesController = void 0;
const common_1 = require("@nestjs/common");
const saveContent_dto_1 = require("./dto/saveContent.dto");
const pages_service_1 = require("./pages.service");
let PagesController = class PagesController {
    constructor(_pageService) {
        this._pageService = _pageService;
    }
    async saveContent(pageId, saveContentDto) {
        console.log('pageID', pageId);
        console.log('content', saveContentDto.content);
        this._pageService.saveContent(pageId, saveContentDto.content);
    }
    async getPage(pageId) {
        return await this._pageService.getPage(pageId);
    }
};
__decorate([
    (0, common_1.Post)('/save/:pageId'),
    __param(0, (0, common_1.Param)('pageId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, saveContent_dto_1.SaveContentDto]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "saveContent", null);
__decorate([
    (0, common_1.Get)('/:pageId'),
    __param(0, (0, common_1.Query)('pageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "getPage", null);
PagesController = __decorate([
    (0, common_1.Controller)('/pages'),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesController);
exports.PagesController = PagesController;
//# sourceMappingURL=pages.controller.js.map