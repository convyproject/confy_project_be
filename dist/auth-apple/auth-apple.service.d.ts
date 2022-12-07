import { ConfigService } from '@nestjs/config';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthAppleLoginDto } from './dto/auth-apple-login.dto';
export declare class AuthAppleService {
    private configService;
    constructor(configService: ConfigService);
    getProfileByToken(loginDto: AuthAppleLoginDto): Promise<SocialInterface>;
}
