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
exports.Content = void 0;
const graphql_1 = require("@nestjs/graphql");
let Children = class Children {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Children.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Children.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Children.prototype, "src", void 0);
__decorate([
    (0, graphql_1.Field)(() => ChildChild, { nullable: true }),
    __metadata("design:type", Array)
], Children.prototype, "children", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Children.prototype, "shortName", void 0);
Children = __decorate([
    (0, graphql_1.InputType)('ChildrenInput'),
    (0, graphql_1.ObjectType)('Children')
], Children);
let ChildChild = class ChildChild {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ChildChild.prototype, "text", void 0);
ChildChild = __decorate([
    (0, graphql_1.ObjectType)('ChildChild'),
    (0, graphql_1.InputType)('ChildChildInput')
], ChildChild);
let Content = class Content {
};
__decorate([
    (0, graphql_1.Field)(() => [Children]),
    __metadata("design:type", Array)
], Content.prototype, "children", void 0);
Content = __decorate([
    (0, graphql_1.ObjectType)('Content'),
    (0, graphql_1.InputType)('ContentInput')
], Content);
exports.Content = Content;
//# sourceMappingURL=content.model.js.map