import { AuthService } from 'src/auth/auth.service';
import { AuthFacebookService } from './auth-facebook.service';
import { AuthFacebookLoginDto } from './dto/auth-facebook-login.dto';
export declare class AuthFacebookController {
    authService: AuthService;
    authFacebookService: AuthFacebookService;
    constructor(authService: AuthService, authFacebookService: AuthFacebookService);
    login(loginDto: AuthFacebookLoginDto): Promise<{
        token: string;
        user: import("../users/entities/user.entity").User;
    }>;
}
