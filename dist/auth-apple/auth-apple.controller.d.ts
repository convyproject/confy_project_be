import { AuthService } from 'src/auth/auth.service';
import { AuthAppleService } from './auth-apple.service';
import { AuthAppleLoginDto } from './dto/auth-apple-login.dto';
export declare class AuthAppleController {
    authService: AuthService;
    authAppleService: AuthAppleService;
    constructor(authService: AuthService, authAppleService: AuthAppleService);
    login(loginDto: AuthAppleLoginDto): Promise<{
        token: string;
        user: import("../users/entities/user.entity").User;
    }>;
}
