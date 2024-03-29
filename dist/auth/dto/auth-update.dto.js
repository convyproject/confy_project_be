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
exports.AuthUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const is_exists_validator_1 = require("../../utils/validators/is-exists.validator");
const file_entity_1 = require("../../files/entities/file.entity");
class AuthUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => file_entity_1.FileEntity }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['FileEntity', 'id'], {
        message: 'imageNotExists: Foto tidak ditemukan',
    }),
    __metadata("design:type", file_entity_1.FileEntity)
], AuthUpdateDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'fullNameEmpty: Nama lengkap wajib diisi' }),
    __metadata("design:type", String)
], AuthUpdateDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'passwordEmpty: Password bary wajib diisi' }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], AuthUpdateDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'oldPasswordEmpty: Password lama wajib diisi' }),
    __metadata("design:type", String)
], AuthUpdateDto.prototype, "oldPassword", void 0);
exports.AuthUpdateDto = AuthUpdateDto;
//# sourceMappingURL=auth-update.dto.js.map