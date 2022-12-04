import { ConfigService } from '@nestjs/config';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthGoogleLoginDto } from './dto/auth-google-login.dto';
export declare class AuthGoogleService {
    private configService;
    private google;
    constructor(configService: ConfigService);
    getProfileByToken(loginDto: AuthGoogleLoginDto): Promise<SocialInterface>;
}
