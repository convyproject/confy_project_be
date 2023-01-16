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
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const random_string_generator_util_1 = require("@nestjs/common/utils/random-string-generator.util");
const roles_enum_1 = require("../roles/roles.enum");
const statuses_enum_1 = require("../statuses/statuses.enum");
const crypto = require("crypto");
const class_transformer_1 = require("class-transformer");
const status_entity_1 = require("../statuses/entities/status.entity");
const role_entity_1 = require("../roles/entities/role.entity");
const auth_providers_enum_1 = require("./auth-providers.enum");
const users_service_1 = require("../users/users.service");
const forgot_service_1 = require("../forgot/forgot.service");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(jwtService, usersService, forgotService, mailService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.forgotService = forgotService;
        this.mailService = mailService;
    }
    async validateLogin(loginDto, onlyAdmin) {
        const user = await this.usersService.findOne({
            email: loginDto.email,
        });
        if (!user ||
            (user &&
                !(onlyAdmin ? [roles_enum_1.RoleEnum.admin] : [roles_enum_1.RoleEnum.user]).includes(user.role.id))) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    email: {
                        message: 'notFound: Alamat e-mail / password salah',
                    },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (user && user.status && user.status.id === 2) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    email: {
                        message: 'emailNotVerified: Alamat e-mail belum di-verifikasi',
                    },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (user.provider !== auth_providers_enum_1.AuthProvidersEnum.email) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    email: {
                        message: 'needLoginViaProvider-${user.provider}: Membutuhkan login dari penyedia ${user.provider}',
                    },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const isValidPassword = await bcrypt.compare(loginDto.password, user.password);
        if (isValidPassword) {
            const token = await this.jwtService.sign({
                id: user.id,
                role: user.role,
            });
            return { token, user: user };
        }
        else {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    password: {
                        message: 'notFound: Alamat e-mail / password salah',
                    },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async validateSocialLogin(authProvider, socialData) {
        var _a;
        let user;
        const socialEmail = (_a = socialData.email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const userByEmail = await this.usersService.findOne({
            email: socialEmail,
        });
        user = await this.usersService.findOne({
            socialId: socialData.id,
            provider: authProvider,
        });
        if (user) {
            if (socialEmail && !userByEmail) {
                user.email = socialEmail;
            }
            await this.usersService.update(user.id, user);
        }
        else if (userByEmail) {
            user = userByEmail;
        }
        else {
            const role = (0, class_transformer_1.plainToClass)(role_entity_1.Role, {
                id: roles_enum_1.RoleEnum.user,
            });
            const status = (0, class_transformer_1.plainToClass)(status_entity_1.Status, {
                id: statuses_enum_1.StatusEnum.active,
            });
            user = await this.usersService.create({
                email: socialEmail,
                fullName: socialData.fullName,
                socialId: socialData.id,
                provider: authProvider,
                role,
                status,
            });
            user = await this.usersService.findOne({
                id: user.id,
            });
        }
        const jwtToken = await this.jwtService.sign({
            id: user.id,
            role: user.role,
        });
        return {
            token: jwtToken,
            user,
        };
    }
    async register(dto) {
        const hash = crypto
            .createHash('sha256')
            .update((0, random_string_generator_util_1.randomStringGenerator)())
            .digest('hex');
        const user = await this.usersService.create(Object.assign(Object.assign({}, dto), { email: dto.email, role: {
                id: roles_enum_1.RoleEnum.user,
            }, status: {
                id: statuses_enum_1.StatusEnum.inactive,
            }, hash }));
        await this.mailService.userSignUp({
            to: user.email,
            data: {
                hash,
            },
        });
    }
    async confirmEmail(hash) {
        const user = await this.usersService.findOne({
            hash,
        });
        if (!user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'notFound: Pengguna tidak ditemukan',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        user.hash = null;
        user.status = (0, class_transformer_1.plainToClass)(status_entity_1.Status, {
            id: statuses_enum_1.StatusEnum.active,
        });
        await user.save();
        const token = await this.jwtService.sign({
            id: user.id,
            role: user.role,
        });
        return { token, user: user };
    }
    async forgotPassword(email) {
        const user = await this.usersService.findOne({
            email,
        });
        if (!user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    email: {
                        message: 'notFound: Alamat e-mail / password tidak ditemukan',
                    },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        else {
            const hash = crypto
                .createHash('sha256')
                .update((0, random_string_generator_util_1.randomStringGenerator)())
                .digest('hex');
            await this.forgotService.create({
                hash,
                user,
            });
            await this.mailService.forgotPassword({
                to: email,
                data: {
                    hash,
                },
            });
        }
    }
    async resetPassword(hash, password) {
        const forgot = await this.forgotService.findOne({
            where: {
                hash,
            },
        });
        if (!forgot) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                    hash: { message: 'notFound: Kode unik tidak ditemukan' },
                },
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const user = forgot.user;
        user.password = password;
        await user.save();
        await this.forgotService.softDelete(forgot.id);
    }
    async me(user) {
        return this.usersService.findOne({
            id: user.id,
        });
    }
    async update(user, userDto) {
        if (userDto.password) {
            if (userDto.oldPassword) {
                const currentUser = await this.usersService.findOne({
                    id: user.id,
                });
                const isValidOldPassword = await bcrypt.compare(userDto.oldPassword, currentUser.password);
                if (!isValidOldPassword) {
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                        errors: {
                            oldPassword: {
                                message: 'incorrectOldPassword: Password lama anda salah',
                            },
                        },
                    }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                }
            }
            else {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    errors: {
                        oldPassword: {
                            message: 'missingOldPassword: Password lama anda tidak ditemukan',
                        },
                    },
                }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        await this.usersService.update(user.id, userDto);
        return this.usersService.findOne({
            id: user.id,
        });
    }
    async softDelete(user) {
        await this.usersService.softDelete(user.id);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        forgot_service_1.ForgotService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map