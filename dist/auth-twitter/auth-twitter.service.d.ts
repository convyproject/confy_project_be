import { ConfigService } from '@nestjs/config';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthTwitterLoginDto } from './dto/auth-twitter-login.dto';
export declare class AuthTwitterService {
    private configService;
    constructor(configService: ConfigService);
    getProfileByToken(loginDto: AuthTwitterLoginDto): Promise<SocialInterface>;
}
