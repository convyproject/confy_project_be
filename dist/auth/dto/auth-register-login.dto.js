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
exports.AuthRegisterLoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const is_not_exists_validator_1 = require("../../utils/validators/is-not-exists.validator");
const class_transformer_1 = require("class-transformer");
class AuthRegisterLoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test1@example.com' }),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase().trim()),
    (0, class_validator_1.Validate)(is_not_exists_validator_1.IsNotExist, ['User'], {
        message: 'emailAlreadyExists',
    }),
    (0, class_validator_1.IsEmail)(undefined, {
        message: 'Email must be valid email',
    }),
    __metadata("design:type", String)
], AuthRegisterLoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MinLength)(8, {
        message: '//Password must be atleast 8 characters',
    }),
    (0, class_validator_1.Matches)(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/, {
        message: 'Password must be atleast 1 uppercase 1 lowercase 1 number',
    }),
    __metadata("design:type", String)
], AuthRegisterLoginDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+62823' }),
    (0, class_validator_1.IsPhoneNumber)(undefined, {
        message: 'Phone number must be valid phone number',
    }),
    __metadata("design:type", String)
], AuthRegisterLoginDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthRegisterLoginDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    __metadata("design:type", String)
], AuthRegisterLoginDto.prototype, "lastName", void 0);
exports.AuthRegisterLoginDto = AuthRegisterLoginDto;
//# sourceMappingURL=auth-register-login.dto.js.map