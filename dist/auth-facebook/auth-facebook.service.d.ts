import { ConfigService } from '@nestjs/config';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthFacebookLoginDto } from './dto/auth-facebook-login.dto';
export declare class AuthFacebookService {
    private configService;
    private fb;
    constructor(configService: ConfigService);
    getProfileByToken(loginDto: AuthFacebookLoginDto): Promise<SocialInterface>;
}
