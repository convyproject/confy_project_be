import { AuthService } from 'src/auth/auth.service';
import { AuthTwitterService } from './auth-twitter.service';
import { AuthTwitterLoginDto } from './dto/auth-twitter-login.dto';
export declare class AuthTwitterController {
    authService: AuthService;
    authTwitterService: AuthTwitterService;
    constructor(authService: AuthService, authTwitterService: AuthTwitterService);
    login(loginDto: AuthTwitterLoginDto): Promise<{
        token: string;
        user: import("../users/entities/user.entity").User;
    }>;
}
