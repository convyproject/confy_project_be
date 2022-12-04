import { AuthService } from 'src/auth/auth.service';
import { AuthGoogleService } from './auth-google.service';
import { AuthGoogleLoginDto } from './dto/auth-google-login.dto';
export declare class AuthGoogleController {
    authService: AuthService;
    authGoogleService: AuthGoogleService;
    constructor(authService: AuthService, authGoogleService: AuthGoogleService);
    login(loginDto: AuthGoogleLoginDto): Promise<{
        token: string;
        user: import("../users/entities/user.entity").User;
    }>;
}
