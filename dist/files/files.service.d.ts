import { ConfigService } from '@nestjs/config';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
export declare class FilesService {
    private readonly configService;
    private fileRepository;
    constructor(configService: ConfigService, fileRepository: Repository<FileEntity>);
    uploadFile(file: any): Promise<FileEntity>;
}
