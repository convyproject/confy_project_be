import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { I18nRequestScopeService } from 'nestjs-i18n';
import { MailData } from './interfaces/mail-data.interface';
export declare class MailService {
    private i18n;
    private mailerService;
    private configService;
    constructor(i18n: I18nRequestScopeService, mailerService: MailerService, configService: ConfigService);
    userSignUp(mailData: MailData<{
        hash: string;
    }>): Promise<void>;
    forgotPassword(mailData: MailData<{
        hash: string;
    }>): Promise<void>;
}
