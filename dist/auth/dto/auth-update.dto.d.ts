import { FileEntity } from '../../files/entities/file.entity';
export declare class AuthUpdateDto {
    photo?: FileEntity;
    fullName?: string;
    password?: string;
    oldPassword: string;
}
