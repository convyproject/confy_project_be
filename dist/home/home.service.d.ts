import { ConfigService } from '@nestjs/config';
export declare class HomeService {
    private configService;
    constructor(configService: ConfigService);
    appInfo(): {
        name: any;
    };
}
