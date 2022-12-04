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
exports.AuthTwitterService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Twitter = require("twitter");
let AuthTwitterService = class AuthTwitterService {
    constructor(configService) {
        this.configService = configService;
    }
    async getProfileByToken(loginDto) {
        const twitter = new Twitter({
            consumer_key: this.configService.get('twitter.consumerKey'),
            consumer_secret: this.configService.get('twitter.consumerSecret'),
            access_token_key: loginDto.accessTokenKey,
            access_token_secret: loginDto.accessTokenSecret,
        });
        const data = await new Promise((resolve) => {
            twitter.get('account/verify_credentials', { include_email: true }, (error, profile) => {
                resolve(profile);
            });
        });
        return {
            id: data.id.toString(),
            email: data.email,
            firstName: data.name,
        };
    }
};
AuthTwitterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthTwitterService);
exports.AuthTwitterService = AuthTwitterService;
//# sourceMappingURL=auth-twitter.service.js.map