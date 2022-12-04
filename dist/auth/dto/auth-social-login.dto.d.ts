import { Tokens } from 'src/social/tokens';
import { AuthProvidersEnum } from '../auth-providers.enum';
export declare class AuthSocialLoginDto {
    tokens: Tokens;
    socialType: AuthProvidersEnum;
    firstName?: string;
    lastName?: string;
}
