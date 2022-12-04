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
exports.AuthSocialLoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const tokens_1 = require("../../social/tokens");
const auth_providers_enum_1 = require("../auth-providers.enum");
class AuthSocialLoginDto {
}
__decorate([
    (0, class_validator_1.Allow)(),
    (0, swagger_1.ApiProperty)({ type: () => tokens_1.Tokens }),
    __metadata("design:type", tokens_1.Tokens)
], AuthSocialLoginDto.prototype, "tokens", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: auth_providers_enum_1.AuthProvidersEnum }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSocialLoginDto.prototype, "socialType", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuthSocialLoginDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuthSocialLoginDto.prototype, "lastName", void 0);
exports.AuthSocialLoginDto = AuthSocialLoginDto;
//# sourceMappingURL=auth-social-login.dto.js.map